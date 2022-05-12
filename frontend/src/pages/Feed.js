import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tweet from '../components/Tweet.js'
import ComposeTweet from '../components/ComposeTweet.js'

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
            <Grid container={true} direction='row' alignItems='center' justifyContent='center' height='100vh'>
                <Grid item={true} md={3}>
                    <Box sx={{ bgcolor: '#1DA1F2', height: '100vh' }}>
                    </Box>
                </Grid>
                <Grid item={true} md={6} alignItems='center' justifyContent='center'>
                    <Stack direction='column' spacing={3} alignItems='center'>                
                        <ComposeTweet />
                        <Divider sx={{ width:'90%' }} />

                        { tweets?.map(tweet => <Tweet key={tweet?.id} tweet={tweet} />) }
                    </ Stack>
                </Grid>
                <Grid item={true} md={3}>
                    <Box sx={{ bgcolor: 'red', height: '100vh' }}>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;