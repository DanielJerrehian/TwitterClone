import React from 'react'

import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function ProfileCardTabs() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box container sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Profile Options">
                <Tab value={1} label='Tweets' />
                <Tab value={2} label='Tweets & Replies' />
                <Tab value={3} label='Media' />
                <Tab value={4} label='Likes' />
            </Tabs>
        </Box>
    );
}

export default ProfileCardTabs
