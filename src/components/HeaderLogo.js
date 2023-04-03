
import Typography from '@mui/material/Typography';
import React from 'react';

const HeaderLogo = () => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={()=>{
                window.location.href = "/Homeapp"
            }}
          >
            <span  style={{ cursor: 'pointer'}}>Food For Child</span>
          </Typography>
    )
}

export default HeaderLogo