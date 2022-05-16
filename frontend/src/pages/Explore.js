import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import Searchbar from '../components/Searchbar.js'
import FeedSidebarLeft from '../components/FeedSidebarLeft.js'


function Explore() {
    const [trends] = useState(['Trend 1', 'Trend 2', 'Trend 3'])

    return (
        <div>
            <Grid container={true} direction='row' height='100vh'>
                <Grid item={true} md={3}>
                    <FeedSidebarLeft />
                </Grid>
                <Grid item={true} md={6} sx={{ border: '1px solid #0000001f' }}>
                    <Stack direction='column' spacing={3} alignItems='center'>
                        <Searchbar />

                        <Typography alignItems='flex-start'>
                            Trends for you
                        </Typography>
                        {trends?.map(trend =>
                            <MenuItem key={trend} alignItems='center'>
                                <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                                    {trend}
                                </ListItemText>
                            </MenuItem>)
                        }
                    </ Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default Explore;