import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

import { callApiPost } from '../utils/callApi'
import { writeAccessToken, writeRefreshToken } from '../utils/localStorage'

function Login(props) {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({email: '', password: ''});

    function handleClose() {
        props.setOpenLogin(false);
        setLoginData({email: '', password: ''});
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [name]: value
            }
        })
    }

    function navigatePage(link) {
            navigate(`/${link}`);
    };

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const data = await callApiPost('/login', loginData)
            if (data) {
                handleClose()
                writeAccessToken(data?.accessToken);
                writeRefreshToken(data?.refreshToken);
                navigatePage("feed");
            }
        }
        catch (error) {
            console.log(error)
        }
    }
        

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>
                Login
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack direction='column' spacing={3} alignItems='center'>
                        <TextField
                            autoFocus
                            margin='dense'
                            id='email'
                            name='email'
                            value={loginData.email}
                            onChange={handleChange}
                            label='Email Address'
                            type='email'
                            variant='outlined'
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id='password'
                            name='password'
                            value={loginData.password}
                            onChange={handleChange}
                            label='Password'
                            type='password'
                            variant='outlined'
                            fullWidth
                        />
                        <Button type='submit' variant='contained' color='primary' size='large' sx={{ width: '50%', fontWeight: 600, color: 'white' }}>
                            Login
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login
