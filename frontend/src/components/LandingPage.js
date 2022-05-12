import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import Register from './Register'
import Login from './Login'

function LandingPage() {
    const [openRegister, setOpenRegister] = useState(false);
    const handleOpenRegister = () => setOpenRegister(true); 

    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => setOpenLogin(true); 

    return (
        <div>
            <Grid container={true} direction='row' alignItems='center' justifyContent='center' height='100vh'>
                <Grid item={true} md={7}>
                    <Box sx={{ bgcolor: '#1DA1F2', height: '100vh' }}>
                    </Box>
                </Grid>
                <Grid item={true} md={5} display='flex' justifyContent='center'>
                    <Box sx={{ width: '90%' }}>
                        <Stack direction='column' spacing={3} alignItems='center'>
                            <Typography variant='h2' component='div' sx={{ fontWeight: 600, textAlign: 'center' }} >
                                Happening Now
                            </Typography>
                            <Typography variant='h4' component='div' sx={{ fontWeight: 400, textAlign: 'center' }}>
                                Join Twitter today.
                            </Typography>
                            <Button variant='outlined' size='large' sx={{ width: '50%' }}>
                                Sign up with Google
                            </Button>
                            <Button variant='outlined' size='large' sx={{ width: '50%' }}>
                                Sign up with Apple
                            </Button>
                            <Divider sx={{ width:'90%' }}>
                                <Chip label='OR' />
                            </Divider>
                            <Button 
                                onClick={handleOpenRegister}
                                variant='contained' 
                                color='primary' 
                                size='large' 
                                sx={{ width: '50%', fontWeight: 600, color: 'white' }}
                            >
                                Sign up with email
                            </Button>

                            <Register open={openRegister} setOpenRegister={setOpenRegister} />
                            
                            <Typography variant='span' component='div' sx={{ fontWeight: 300, width: '50%', textAlign: 'center' }}>
                                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                            </Typography>
                            <Divider sx={{ width:'90%' }} />
                            <Typography variant='span' component='div' sx={{ fontWeight: 600 }}>
                                Already have an account?
                            </Typography>
                            <Button 
                                onClick={handleOpenLogin}
                                variant='outlined' 
                                size='large' 
                                sx={{ width: '50%', fontWeight: 600 }}
                            >
                                Sign in
                            </Button>

                            <Login open={openLogin} setOpenLogin={setOpenLogin} />

                        </ Stack >
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage