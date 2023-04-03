
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NavMenuResponsive = () => {
    const navItems = [
        { name: 'หน้าหลัก', target: '/Homeapp' },
        { name: 'วิเคราะห์น้ำหนัก-ส่วนสูง', target: '/Weight_Height' },
        { name: 'สำรับอาหาร', target: '/page3' },
        { name: 'โปรไฟล์', target: '/profile' }
    ];
    return (
        <List>
            {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <a href={item.target}><ListItemText primary={item.name} /></a>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default NavMenuResponsive