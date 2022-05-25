import { useState } from 'react';
import { Link } from 'react-router-dom';

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

import ComposeTweetModal from './ComposeTweetModal.js';


function FeedSidebarLeft(props) {
    const { tweets, setTweets } = props
    const [openTweetModal, setOpenTweetModal] = useState(false);
    const handleOpenTweetModal = () => setOpenTweetModal(true);

    return (
        <Stack direction='column' spacing={4} alignItems='center' justifyContent='center' marginTop='3rem'>
            <Paper sx={{ width: '75%', height: '75%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon sx={{ marginRight: '1rem' }}>
                            <HomeIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                            <Link to='/feed'>Home</Link>
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon sx={{ marginRight: '1rem' }}>
                            <TagIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                            Explore
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon sx={{ marginRight: '1rem' }}>
                            <NotificationsIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                            Notifications
                        </ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon sx={{ marginRight: '1rem' }}>
                            <PersonIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon sx={{ marginRight: '1rem' }}>
                            <MoreHorizIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: '20px', fontWeight: 400 }}>
                            More
                        </ListItemText>
                    </MenuItem>
                    <Divider />
                    <Stack direction='column' spacing={3} alignItems='center' justifyContent='center'>
                        <Button
                            onClick={handleOpenTweetModal}
                            variant='contained'
                            size='large'
                            sx={{ width: '75%', fontWeight: 400, bgcolor: "primary", color: 'white' }}
                        >
                            Tweet
                        </Button>
                        <ComposeTweetModal tweets={tweets} setTweets={setTweets} openTweetModal={openTweetModal} setOpenTweetModal={setOpenTweetModal} />
                    </Stack>
                </MenuList>
            </Paper>
        </Stack>
    )
}

export default FeedSidebarLeft