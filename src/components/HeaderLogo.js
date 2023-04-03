
import Typography from '@mui/material/Typography';
import React from 'react';

const HeaderLogo = () => {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Food For Child
          </Typography>
    )
}

export default HeaderLogo