import React from 'react';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



function FeedSidebarLeft() {
    return (
        <Stack direction='column' spacing={3} alignItems='center' justifyContent='center' marginTop='3rem'>
            <Paper sx={{ width: '75%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <TagIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Explore</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <NotificationsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Notifications</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <MoreHorizIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>More</ListItemText>
                    </MenuItem>
                    <Divider />
                    <Stack direction='column' spacing={3} alignItems='center' justifyContent='center'>
                        <Button
                            onClick={null}
                            variant='contained'
                            size='large'
                            sx={{ width: '75%', fontWeight: 600, bgcolor: "primary", color: 'white' }}
                        >
                            Tweet
                        </Button>
                    </Stack>
                </MenuList>
            </Paper>
        </Stack>
    )
}

export default FeedSidebarLeft