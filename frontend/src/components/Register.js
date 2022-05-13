import React, { useState } from 'react';
import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';


function Register(props) {
    const [registerData, setRegisterData] = useState({email: '', username: '', password: ''});
    const [birthday, setBirthday] = useState(null);

    function handleClose() {
        props.setOpenRegister(false);
        setRegisterData({email: '', username: '', password: ''});
        setBirthday(null);
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setRegisterData(prevRegisterData => {
            return {
                ...prevRegisterData,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        registerData["birthday"] = birthday.toISOString().split('T')[0];
        
        try {
            const data = await axios.post('/register', registerData)
            if (data?.status === 201) {
                handleClose()
            }
        }
        catch (error) {
            console.log(error)
        }
    }
        

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>
                Create Your Account
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack direction='column' spacing={3} alignItems='center'>
                        <TextField
                            autoFocus
                            margin='dense'
                            id='email'
                            name='email'
                            value={registerData.email}
                            onChange={handleChange}
                            label='Email Address'
                            type='email'
                            fullWidth
                            variant='outlined'
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id='username'
                            name='username'
                            value={registerData.username}
                            onChange={handleChange}
                            label='Username'
                            type='text'
                            fullWidth
                            variant='outlined'
                        />
                        <TextField
                            autoFocus
                            margin='dense'
                            id='password'
                            name='password'
                            value={registerData.password}
                            onChange={handleChange}
                            label='Password'
                            type='password'
                            fullWidth
                            variant='outlined'
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                id='birthday'
                                name='birthday'
                                value={birthday}
                                onChange={(selectedDate) => {setBirthday(selectedDate);}}
                                label='Birthday'
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button type='submit' variant='contained' color='primary' size='large' sx={{ width: '50%', fontWeight: 600, color: 'white' }}>
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Register
