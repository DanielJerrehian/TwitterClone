import React from 'react'

import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


function Tweet(props) {
    return (
        // <Container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Card sx={{ width: '100%' }}>
                <Stack direction='column' spacing={1}>
                    <CardContent>
                    <Stack direction='column' spacing={3}>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Avatar alt={props?.tweet?.user.username} src={props?.tweet?.user.profile_picture} />
                                <Typography sx={{ fontWeight: 600 }} color="black">
                                    @{props?.tweet?.user.username}
                                </Typography>
                                <Typography color="gray">
                                    ·
                                </Typography>
                                <Typography sx={{ fontWeight: 300 }} color="gray">
                                    ({props?.tweet?.user.email})
                                </Typography>
                            </Stack>
                            <Typography>
                                {props?.tweet?.body}
                            </Typography>
                        </Stack>
                    </CardContent>
                    <CardActions>
                            <Button variant='outlined' size="small" sx={{ fontWeight: 600, color:"black"}}>...</Button>
                    </CardActions>
                </Stack>
            </Card>
        // </Container>
    )
}

export default Tweet
