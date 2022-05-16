import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


function Tweet(props) {
    const { tweet, currentUser, handleDeleteTweet } = props;
    

    return (
        <Card sx={{ width: '100%' }}>
            <Stack direction='column' spacing={1}>
                <CardContent>
                    <Stack direction='column' spacing={3}>
                        <Stack direction='row' spacing={1} alignItems='center'>
                            <Avatar alt={tweet?.user.username} src={tweet?.user.profile_picture} />
                            <Typography sx={{ fontWeight: 600 }} color="black">
                                @{tweet?.user.username}
                            </Typography>
                            <Typography color="gray">
                                ·
                            </Typography>
                            <Typography sx={{ fontWeight: 300 }} color="gray">
                                ({tweet?.user.email})
                            </Typography>
                        </Stack>
                        <Typography>
                            {tweet?.body}
                        </Typography>
                    </Stack>
                </CardContent>
                {
                    tweet?.user?.id === currentUser?.id ?
                        <CardActions>
                            <Button
                                onClick={() => handleDeleteTweet(tweet?.id)}
                                variant='outlined'
                                size='small'
                                sx={{ fontWeight: 600, color: 'black' }}
                            >
                                Delete Tweet
                            </Button>
                        </CardActions>
                        :
                        null
                }
            </Stack>
        </Card>
    )
}

export default Tweet
