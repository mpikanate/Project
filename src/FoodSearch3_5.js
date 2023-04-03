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
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "./FoodSearch3_5.css"
import HeaderLogo from './components/HeaderLogo';
import NavMenuResponsive from './components/NavMenuResponsive';
import NavMenu from './components/NavMenu';




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
      <Typography variant="h6" sx={{ my: 2 }}>
        Food For Child
      </Typography>
      <HeaderLogo/>

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


      <center>
        <br></br>
        <br></br>
        <br></br>
        <h1>
          ค้นหาสำรับอาหาร
        </h1>
        <div className='Searchbar'>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="ค้นหาสำรับอาหาร"
              inputProps={{ 'aria-label': 'ค้นหาสำรับอาหาร' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Paper>
        </div>
      </center>
          <div>
            <br></br>
            <br></br>
            <br></br>
          <Box>
            <Grid container spacing={6}>

              <Grid item xs={12} sm={6} md={4}>
                <Item><div>
                  <Card sx={{ maxWidth: 'auto' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/food.png" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          สำรับอาหารที่ 1

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link href="page8">


                        <Button size="medium" color="primary">
                          เลือก
                        </Button>

                      </Link>

                      <Button>
                        <FavoriteBorderIcon>

                        </FavoriteBorderIcon>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item><div>
                  <Card sx={{ maxWidth: 'auto' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image="/food.png" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          สำรับอาหารที่ 2
                        </Typography>

                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link href="page8">


                        <Button size="medium" color="primary">
                          เลือก
                        </Button>
                      </Link>
                      <Button>
                        <FavoriteBorderIcon>

                        </FavoriteBorderIcon>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Item><div>
                  <Card sx={{ maxWidth: 'auto' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        width={200} height={200}
                        image="/food.png" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          สำรับอาหารที่ 3

                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link href="page8">


                        <Button size="medium" color="primary">
                          เลือก
                        </Button>
                      </Link>
                      <Button>
                        <FavoriteBorderIcon>

                        </FavoriteBorderIcon>
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                </Item>
              </Grid>

            </Grid>
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

