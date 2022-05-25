import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ProfileCard from '../components/ProfileCard.js'
import Tweet from '../components/Tweet.js'
import FeedSidebarLeft from '../components/FeedSidebarLeft.js'
import FeedSidebarRight from '../components/FeedSidebarRight.js'

import { getTokens } from '../utils/localStorage'
import { callApiGet } from '../utils/callApi'

function Home() {
    const { accessToken, refreshToken } = getTokens()
    const [userProfile, setUserProfile] = useState({})

    async function getUserProfile() {
        const data = await callApiGet('/DanielJerrehian', accessToken, refreshToken)
        if (data) {
            setUserProfile(data?.userProfile)
        }
    }

    useEffect(() => {
        getUserProfile();
    }, []);

    return (
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
    )
}

export default Home;