import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

import { callApiPost } from '../utils/callApi'

function ComposeTweet(props) {
    const { currentUser, token } = props
    const [newTweet, setNewTweet] = useState({ body: '' })

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
            const data = await callApiPost('/compose/tweet', newTweet, token)
            if (data) {
                newTweet['id'] = props.tweets.length + 1
                newTweet['user'] = currentUser
                props.setTweets(prevTweets => {
                    return [
                        newTweet,
                        ...prevTweets
                    ]
                })
                setNewTweet({ body: '' })
                if (props.modal) {
                    props.handleClose()
                }

            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
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
                                multiline
                                rows={3}
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
    )
}

export default ComposeTweet