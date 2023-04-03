
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CssBaseline from '@mui/material/CssBaseline';






const drawerWidth = 240;

const navItems = [
  { name: 'หน้าหลัก', target: '/Homeapp' },
  { name: 'วิเคราะห์น้ำหนัก-ส่วนสูง', target: '/page2' },
  { name: 'สำรับอาหาร', target: '/page3' },
  { name: 'โปรไฟล์', target: '/profile' }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6"  sx={{ my: 2 }}>
        Food For Child
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href={item.target}><ListItemText primary={item.name} /></a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    
    createData('ข้าวสวยแกงจืดฟักหมูสับ ไข่ตุ๋น แอปเปิล', 356, 16.0, 49, 3.9)
  ];
  


  return (
    <><Box sx={{ width: 'auto', display: 'flex' }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Food For Child
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }}>
                <a href={item.target}>{item.name}</a>
              </Button>
            ))}
          </Box>
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
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <center>
        <div>
          <h1>
            สำรับอาหารที่ 1
          </h1>
          <h1>
          ข้าวสวยแกงจืดฟักหมูสับ ไข่ตุ๋น แอปเปิล
          </h1>
        </div>
        <Typography variant="subtitle1" gutterBottom>
        แกงจืดฟักหมูสับ<br></br>
1. นําฟักเขียว แครอท และเห็ดหอมสดล้างนํ้าให้สะอาด<br></br>
2. ปอกเปลือกและหั่นฟักเขียว แครอท เห็ดหอม เตรียมไว้<br></br>
3. หมักหมูด้วยซีอิ๊วขาว<br></br>
4. ใส่นํ้าลงในหม้อ ยกขึ้นบนเตาไฟจนเดือด ใส่หมูหมักปั้นเป็นก้อนๆ ลงไป<br></br>
5. ใส่ฟักเขียว แครอท และเห็ดหอมลงไปต้มจนสุก<br></br>
6. โรยด้วยต้นหอมผักชีพร้อมเสิร์ฟ<br></br>
ไข่ตุ๋น<br></br>
1. ตีไข่ลงในชาม เติมนํ้าเปล่าและซีอิ๊วขาวคนให้เข้ากัน โดยวิธีทําไข่ตุ๋นให้เนียน
นั้นคือการนําไข่ไปกรองผ่านกระชอนก่อน 1 ครั้ง<br></br>
2. ใส่แครอทหั่นเต๋าลงไปในถ้วยที่จะใช้นึ่งไข่<br></br>
3. ใสไข่ ที่กรองผ่าานกระชอนลงไปในถ้วย แล้วนำไขํตุ๋นไปนึ่งประมาณ 20-30 นาที<br></br>
      </Typography>
      </center></>
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

