import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Tweet from '../components/Tweet.js'
import ComposeTweet from '../components/ComposeTweet.js'
import FeedSidebarLeft from '../components/FeedSidebarLeft.js'
import FeedSidebarRight from '../components/FeedSidebarRight.js'


function Home() {
    const [tweets, setTweets] = useState([])

    async function getTweets() {
        const { data } = await axios.get('/tweets')
        setTweets(data?.tweets)
    }

    useEffect(() => {
        getTweets();
    }, []);

    return (
        <div>
            <Grid container={true} direction='row' justifyContent='center' height='100vh'>
                <Grid item={true} md={3} alignItems='flex-start'>
                    <FeedSidebarLeft />
                </Grid>
                <Grid item={true} md={6} alignItems='center' justifyContent='center' sx={{ border: '1px solid #0000001f' }}>
                    <Stack direction='column' spacing={3} alignItems='center'>
                        <Typography variant='h6' sx={{ fontWeight: 600, color: 'black' }}>
                            Latest Tweets
                        </Typography>

                        <ComposeTweet tweets={tweets} setTweets={setTweets} />

                        <Divider sx={{ width: '90%' }} />

                        {tweets?.map(tweet => <Tweet key={tweet?.id} tweet={tweet} />)}
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