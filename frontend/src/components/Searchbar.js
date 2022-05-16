import React from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';


function Searchbar() {
    return (
            <FormControl
                sx={{ width: '50%', borderRadius: '20px'}}
                variant='filled'
            >
                <Input
                    id='search-twitter'
                    placeholder='Search Twitter'
                    startAdornment={
                        <InputAdornment position='start' sx={{ marginRight: '.5rem' }}>
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl >
    )
}

export default Searchbar
