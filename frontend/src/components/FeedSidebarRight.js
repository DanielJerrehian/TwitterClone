import React, { useState } from 'react'

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Searchbar from './Searchbar.js'

function FeedSidebarRight() {
    const [trends] = useState(['Trend 1', 'Trend 2', 'Trend 3'])

    return (
        <Stack direction='column' spacing={3} alignItems='center' justifyContent='center' marginTop='3rem'>
            <Searchbar />
            <Paper sx={{ width: '75%' }}>
                <MenuList>
                    {trends?.map(trend => 
                        <MenuItem key={trend}>
                            <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                                {trend}
                            </ListItemText>
                        </MenuItem>)
                    }
                    <Divider />
                    <MenuItem>
                        <ListItemText>More Trends</ListItemText>
                    </MenuItem>
                    <Divider />
                    <Stack direction='column' spacing={3} alignItems='center' justifyContent='center'>
                        <Button
                            onClick={null}
                            variant='text'
                            size='small'
                            sx={{ width: '75%', fontWeight: 600, bgcolor: "primary", color: 'primary' }}
                        >
                            Show More
                        </Button>
                    </Stack>
                </MenuList>
            </Paper>
        </Stack>
    )
}

export default FeedSidebarRight