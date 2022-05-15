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


function ComposeTweet(props) {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MjYyNzI3MiwianRpIjoiYTMzNWVjMDYtZTBlMy00M2M5LWI0ODAtM2NhYmQzZjYwZDFkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImRhbmllbGplcnJlaGlhbkBnbWFpbC5jb20iLCJuYmYiOjE2NTI2MjcyNzIsImV4cCI6MTY1MzIzMjA3Mn0.l0wkwTwXWKYx0aE9cchSVvAFSArNdzB2GtWSzCtA8_8"
    const [currentUser, setCurrentUser] = useState([])
    const [newTweet, setNewTweet] = useState({'body': ''})

    async function getCurrentUser() {
        const { data } = await axios.get('/current-user?includeTweets=false', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
        setCurrentUser(data?.user)
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    function handleChange(event) {
        const { name, value } = event.target
        setNewTweet(prevNewTweet => {
            return {
                ...prevNewTweet,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const data = await axios.post('/compose/tweet', newTweet, {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            if (data?.status === 201) {
                newTweet['id'] = props.tweets.length + 1
                newTweet['user'] = currentUser
                props.setTweets(prevTweets => {
                    return [
                        newTweet,
                        ...prevTweets
                    ]
                })
                setNewTweet({'body': ''})
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Card sx={{ width: '100%' }}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack direction='column' spacing={1}>
                        <CardContent>
                            <Stack direction='row' spacing={2}>
                                <Avatar alt={currentUser?.username} src={currentUser?.profile_picture} />
                                <TextField
                                    name='body'
                                    value={newTweet.body}
                                    onChange={handleChange}
                                    label='New Tweet'
                                    type='text'
                                    variant='filled'
                                    fullWidth
                                />
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button
                                type='submit'
                                variant='contained'
                                size='small'
                                sx={{ fontWeight: 600, bgcolor: 'primary', color: 'white' }}
                            >
                                Tweet
                            </Button>
                        </CardActions>
                    </Stack>
                </form>
            </Card>
        </Container >
    )
}

export default ComposeTweet