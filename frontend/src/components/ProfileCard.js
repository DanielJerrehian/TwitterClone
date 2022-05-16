import React from 'react'

import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import ProfileCardTabs from './ProfileCardTabs';

function ProfileCard(props) {
    const { userProfile } = props;

    return (
        <Card sx={{ width: '100%' }}>
            <Stack sx={{ position: 'relative' }}>
                <CardMedia
                    component='img'
                    height='200'
                    image='https://images.unsplash.com/photo-1650646002393-9d057933cf89'
                    alt='User cover photo'
                />
                {/* <Box
                    sx={{
                        position: 'absolute',
                        bottom: '0.5rem',
                        left: '0.5rem',
                    }}
                >
                    <Avatar alt={userProfile?.username} src={userProfile?.profile_picture} sx={{ width: 100, height: 100, border: '5px solid white' }} />
                </Box> */}
            </Stack>
            <CardContent>
                <Stack direction='column' spacing={2}>
                    <Stack direction='row' spacing={1}>
                        <Avatar alt={userProfile?.username} src={userProfile?.profile_picture} sx={{ width: 75, height: 75 }} />
                        <Stack direciton='column' spacing={0}>
                            <Stack direction='row' spacing={1}>
                                <Typography variant='h6' sx={{ fontWeight: 600, color: 'black' }}>
                                    {userProfile?.username}
                                </Typography>
                                <Button size='small' variant='outlined'>Edit Profile</Button>
                            </Stack>
                            <Typography sx={{ fontWeight: 300 }} color='gray'>
                                ({userProfile?.email})
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography variant='body' color='text.secondary'>
                        My name's Daniel and I produce music, write code, and like sports.
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <ProfileCardTabs />
            </CardActions>
        </Card >
    )
}

export default ProfileCard