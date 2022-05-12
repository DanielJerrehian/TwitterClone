import React from 'react'
import Container from '@mui/material/Container'


function Footer() {
  return (
    <Container 
        sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: 0
        }}
    >
        <p>About</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Imprint</p>
        <p>Settings</p>
        <p>© 2022 Twitter, Inc.</p>
    </Container>
  )
}

export default Footer
