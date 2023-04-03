import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeaderLogo from './components/HeaderLogo';
import NavMenuResponsive from './components/NavMenuResponsive';
import NavMenu from './components/NavMenu';

const drawerWidth = 240;
const navItems = [
    { name: 'หน้าหลัก', target: '/Homeapp' },
    { name: 'วิเคราะห์น้ำหนัก-ส่วนสูง', target: '/page2' },
    { name: 'สำรับอาหาร', target: '/page3' },
    { name: 'โปรไฟล์', target: '/page4' }
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Food For Child
            </Typography>

            <Divider />
<NavMenuResponsive/>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    return (
        <><Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <HeaderLogo/>
<NavMenu/>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>


        </Box>
            <div>
                <Box component="main" sx={{ p: 2 }}>
                    <Toolbar />
                    <div>

                        <center>
                            <Button style={{ flex: 1, flexDirection: 'column' }}>
                                <img src="./baby-icon.png" width={250} height={250} />
                                <h2>เด็กชาย ไทก้า</h2>
                                <h3>อายุ 3 ปี 7 เดือน 10 วัน</h3>
                            </Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <Button style={{ flex: 1, flexDirection: 'column' }}>
                                <img src="./plus-sign.png" width={220} height={220} />
                                <h4> เพิ่ม </h4>
                            </Button>
                        </center>

                    </div>

                </Box>
            </div>

            <div>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <h2>
                            การเจริญเติบโต
                            <Button>
                                <img src="/add.png" width={50} height={50} />
                            </Button>
                        </h2>
                        <h3>
                            ข้อมูลล่าสุดเมื่อ 22 มกราคม 2566
                        </h3>
                    </Grid>
                    <Grid item>
                        <Button>
                            <img src="/History.png" width={60} height={50} />
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Box component="main" sx={{ p: 2 }}>

                    <h2>
                        <img src="/height (1).png" width={60} height={60} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        55 เซนติเมตร

                    </h2>
                    <img src="/progress1.png" width={500} height={60} />

                    <h2>
                        <img src="/weight (1).png" width={60} height={60} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        15.2 กิโลกรัม
                    </h2>
                    <img src="/progress2.png" width={500} height={60} />

                    <h2>
                        <img src="/IconWeight.png" width={60} height={70} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        ภาวะ อ้วน ผอม
                    </h2>
                    <img src="/progress3.png" width={500} height={60} />
                </Box>
            </div>
        </>

    );

}



DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
