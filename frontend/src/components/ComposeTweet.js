import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


function ComposeTweet() {
    const [currentUser, setCurrentUser] = useState([])
    
    async function getCurrentUser() {
        const { data } = await axios.get('/current-user') 
        setCurrentUser(data?.user)
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Card sx={{ width: '100%' }}>
                <Stack direction='column' spacing={1}>
                    <CardContent>
                        <Stack direction='column' spacing={3}>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Avatar alt={currentUser.username} src={currentUser.profile_picture} />
                            </Stack>
                            <TextField
                                id="new-tweet"
                                label="New Tweet"
                                variant="filled"
                            />
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' size="small" sx={{ fontWeight: 600, bgcolor: "primary", color: 'white' }}>Tweet</Button>
                    </CardActions>
                </Stack>
            </Card>
        </Container>
    )
}

export default ComposeTweet