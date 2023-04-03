import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export default function User() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
       <box> 
 
        
       
        <Link href="login">
        <Button variant="contained">Login</Button>
        </Link>
        
       </box>

      </Container>
    </React.Fragment>

    
  );
}
