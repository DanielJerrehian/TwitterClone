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

import { getTokens } from '../utils/localStorage'
import { callApiGet } from '../utils/callApi'
import { callApiDelete } from '../utils/callApi'

function Home() {
    const { accessToken, refreshToken } = getTokens()
    const [currentUser, setCurrentUser] = useState([])
    const [tweets, setTweets] = useState([])

    async function getCurrentUser() {
        const data = await callApiGet('/current-user?includeTweets=false', accessToken)
        if (data) {
            setCurrentUser(data?.user)
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    async function getTweets() {
        const data = await callApiGet('/tweets');
        if (data) {
            setTweets(data?.tweets)
        }
    }

    useEffect(() => {
        getTweets();
    }, []);

    async function handleDeleteTweet(tweetId) {
        try {
            const data = await callApiDelete(`/${currentUser?.username}/tweet/${tweetId}`, accessToken);
            if (data) {
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
                    <ComposeTweet currentUser={currentUser} setCurrentUser={setCurrentUser} token={accessToken} tweets={tweets} setTweets={setTweets} />
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