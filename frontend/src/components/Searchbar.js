import React from 'react';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';


function Searchbar() {
    return (
        <FormControl
            sx={{ width: '75%', borderRadius: '20px' }}
            variant='filled'
        >
            <Input
                id="search-twitter"
                variant='filled'
                startAdornment={
                    <InputAdornment>
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </FormControl >
    )
}

export default Searchbar
