import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProfileCard from '../components/ProfileCard.js'
import Tweet from '../components/Tweet.js'
import FeedSidebarLeft from '../components/FeedSidebarLeft.js'
import FeedSidebarRight from '../components/FeedSidebarRight.js'


function Home() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MjY4NjQ3NSwianRpIjoiNzk4YjM3NDUtZDFiZC00MzM1LThiOTMtYjMxNDhkMTZhNDJkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImRhbmllbGplcnJlaGlhbkBnbWFpbC5jb20iLCJuYmYiOjE2NTI2ODY0NzUsImV4cCI6MTY1MzI5MTI3NX0.2X5wT0kYrC54CJTX26uFmWi5fH4Fw7TtZBs34-C0ql8"
    const [userProfile, setUserProfile] = useState({})

    async function getUserProfile() {
        const { data } = await axios.get('/DanielJerrehian', { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } })
        setUserProfile(data?.userProfile)
        console.log(userProfile)
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <div>
            <Grid container={true} direction='row' justifyContent='center' height='100vh'>
                <Grid item={true} md={3} alignItems='flex-start'>
                    <FeedSidebarLeft />
                </Grid>
                <Grid item={true} md={6} alignItems='center' justifyContent='center' sx={{ border: '1px solid #0000001f' }}>
                    <Stack direction='column' spacing={3}>
                        <Stack spacing={1} alignItems='flex-start' sx={{ marginLeft: '2rem', marginTop: '1rem' }}>
                            <Typography variant='h6' sx={{ fontWeight: 600, color: 'black' }}>
                                {userProfile?.username}
                            </Typography>
                            <Typography variant='p' sx={{ fontWeight: 300, color: 'black' }}>
                                {userProfile?.tweets?.length} Tweets
                            </Typography>
                        </Stack>

                        <ProfileCard userProfile={userProfile} />
                        {userProfile?.tweets?.map(tweet => <Tweet key={tweet?.id} tweet={tweet} />)}
                
                    </ Stack>
                </Grid>
                <Grid item={true} md={3} alignItems='flex-start'>
                    <FeedSidebarRight />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;