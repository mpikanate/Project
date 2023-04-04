
import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NavMenu = () => {
    const navItems = [
        { name: 'หน้าหลัก', target: '/Homeapp' },
        { name: 'วิเคราะห์น้ำหนัก-ส่วนสูง', target: '/Weight_Height' },
        // { name: 'สำรับอาหาร', target: '/page3' },
        { name: 'โปรไฟล์', target: '/profile' },
        { name: 'ออกจากระบบ', target: '/Login' }
    ];
    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }}>
                    <a href={item.target} style={{color: "#fff"}}>{item.name}</a>
                </Button>
            ))}
        </Box>
    )
}

export default NavMenu