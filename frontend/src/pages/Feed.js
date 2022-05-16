import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Tweet from '../components/Tweet.js'
import ComposeTweet from '../components/ComposeTweet.js'
import FeedSidebarLeft from '../components/FeedSidebarLeft.js'
import FeedSidebarRight from '../components/FeedSidebarRight.js'


function Home() {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MjY4NjQ3NSwianRpIjoiNzk4YjM3NDUtZDFiZC00MzM1LThiOTMtYjMxNDhkMTZhNDJkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImRhbmllbGplcnJlaGlhbkBnbWFpbC5jb20iLCJuYmYiOjE2NTI2ODY0NzUsImV4cCI6MTY1MzI5MTI3NX0.2X5wT0kYrC54CJTX26uFmWi5fH4Fw7TtZBs34-C0ql8"
    const [currentUser, setCurrentUser] = useState([])
    const [tweets, setTweets] = useState([])

    async function getCurrentUser() {
        const { data } = await axios.get('/current-user?includeTweets=false', { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } })
        setCurrentUser(data?.user)
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    async function getTweets() {
        const { data } = await axios.get('/tweets')
        setTweets(data?.tweets)
    }

    useEffect(() => {
        getTweets();
    }, []);

    async function handleDeleteTweet(tweetId) {
        try {
            const data = await axios.delete(`/${currentUser?.username}/tweet/${tweetId}`, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } })
            if (data?.status === 200) {
                setTweets(tweets.filter(tweet => tweet.id !== tweetId))
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Grid container={true} direction='row' justifyContent='center' height='100vh'>
            <Grid item={true} md={3} alignItems='flex-start'>
                <FeedSidebarLeft tweets={tweets} setTweets={setTweets} />
            </Grid>
            <Grid item={true} md={6} alignItems='center' justifyContent='center' sx={{ border: '1px solid #0000001f' }}>
                <Stack direction='column' spacing={3} alignItems='center'>
                    <Typography variant='h6' sx={{ fontWeight: 600, color: 'black' }}>
                        Latest Tweets
                    </Typography>

                    <ComposeTweet currentUser={currentUser} setCurrentUser={setCurrentUser} token={token} tweets={tweets} setTweets={setTweets} />

                    <Divider sx={{ width: '100%' }} />

                    {tweets?.map(tweet => <Tweet key={tweet?.id} tweet={tweet} currentUser={currentUser} handleDeleteTweet={handleDeleteTweet} />)}
                </ Stack>
            </Grid>
            <Grid item={true} md={3} alignItems='flex-start'>
                <FeedSidebarRight />
            </Grid>
        </Grid>
    )
}

export default Home;