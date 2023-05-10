
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { retrieveSelectedTempKidData } from 'utils/auth';

const NavMenuResponsive = () => {
    const selectedKid = retrieveSelectedTempKidData()
    let navItems = [
        { name: 'หน้าหลัก', target: '/Homeapp' },
        // { name: 'สำรับอาหาร', target: '/page3' },
        { name: 'โปรไฟล์', target: '/profile' },
        { name: 'ออกจากระบบ', target: '/Login' }
    ];
    if (selectedKid && selectedKid["KidID"]) {
        navItems = [
            { name: 'หน้าหลัก', target: '/Homeapp' },
            { name: 'วิเคราะห์น้ำหนัก-ส่วนสูง', target: '/Weight_Height' },
            // { name: 'สำรับอาหาร', target: '/page3' },
            { name: 'โปรไฟล์', target: '/profile' },
            { name: 'ออกจากระบบ', target: '/Login' }
        ];
    }
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