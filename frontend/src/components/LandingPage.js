import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import TwitterWhite from '../images/TwitterWhite.svg'
import TwitterBlue from '../images/TwitterBlue.svg'

function LandingPage() {
    return (
        <div>
            <Grid container>
                <Grid item xs={7}>
                    <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                        <img 
                            style={{
                                position: 'absolute',
                                height: '200px',
                                width: '200px'
                            }}
                            src={TwitterWhite}
                        />
                        <img 
                            style={{height: '100%'}}
                            src="https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png"
                        />

                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{ bgcolor: 'white', height: '100vh' }}>
                        <div style={{margin: '50px'}}>
                            <img style={{ width: '40px', height: '40px'}} src={TwitterBlue} />
                            <h1 style={{fontSize: 50}}>Happening Now</h1>
                            <div 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginTop: '50px'
                                }}
                            >
                                <h2 style={{fontSize: 30}}>Join Twitter today.</h2>
                                <Button variant="outlined" size="large" sx={{marginBottom: '20px', width: '400px'}}>Sign up with Google</Button>
                                <Button variant="outlined" size="large" sx={{marginBottom: '20px', width: '400px'}}>Sign up with Apple</Button>
                                <div style={{marginBottom: '20px'}}>
                                    <span>or</span>
                                </div>
                                <Button variant="contained" color="primary" size="large" sx={{marginBottom: '20px', width: '400px'}}>Sign up with email</Button>
                                <span style={{marginBottom: '20px', fontWeight: 300}}>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</span>
                                <div 
                                    style={{
                                        marginTop: '50px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <span style={{marginBottom: '25px', fontWeight: 600}}>Already have an account?</span>
                                    <Button variant="outlined" size="large" sx={{marginBottom: '20px', width: '400px', fontWeight: 600}}>Sign in</Button>
                                </div>
                            </div>
                        </div>     
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage