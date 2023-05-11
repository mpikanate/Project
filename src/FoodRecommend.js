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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HeaderLogo from './components/HeaderLogo';
import NavMenuResponsive from './components/NavMenuResponsive';
import NavMenu from './components/NavMenu';
import CardWithAction from './components/CardWithAction';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { get, size } from 'lodash';
import { toast } from 'react-toastify';
import { retrieveKidTypeData, retrieveProfile } from 'utils/auth';
const API_URL = process.env.REACT_APP_API_ENDPOINT;
const drawerWidth = 240;

function DrawerAppBar(props) {
    const profile = retrieveProfile()
    const kidType = retrieveKidTypeData()
    const { windowProp } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [foodRecommend, setFoodRecommend] = useState({
        Morning: "",
        Noon: "",
        Evening: ""
    })

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Food For Child
            </Typography>
            <Divider />
            <NavMenuResponsive />
        </Box>
    );

    const container = windowProp !== undefined ? () => windowProp().document.body : undefined;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    const fetchRecommendFoodData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/calculate/recommend-food`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    const dataList = get(data, "data", [])
                    if (size(dataList) > 0) {
                        const food = dataList[0]
                        setFoodRecommend({
                            Morning: get(food, "Morning", ""),
                            Noon: get(food, "Noon", ""),
                            Evening: get(food, "Evening", ""),
                        })
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        console.log("kidType:", kidType)
        fetchRecommendFoodData({
            type: get(kidType, "type", "Under")
        })
    }, [])

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
                    <HeaderLogo />
                    <NavMenu />
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
                            <h1>
                                {get(kidType, "type", "Under") === "Under" ? `สำรับอาหารสำหรับน้ำหนักต่ำกว่าเกณฑ์` : `สำรับอาหารสำหรับน้ำหนักมากกว่าเกณฑ์`}
                                <Button onClick={async () => {
                                    await fetchRecommendFoodData({
                                        type: get(kidType, "type", "Under")
                                    })
                                }}>
                                    <img src="/refresh.png" alt="" width={50} height={50} />
                                </Button>
                            </h1>
                        </center>
                    </div>
                    <Box>
                        {
                            get(foodRecommend, "Morning", "") !== "" ?
                                <Grid container spacing={6}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
                                            <div>
                                                <CardWithAction
                                                    img="/food.png"
                                                    header="อาหารเช้า"
                                                    headerSize="20px"
                                                    title={get(foodRecommend, "Morning", "")}
                                                    titleSize="16px"
                                                    isLink={false}
                                                />
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
                                            <div>
                                                <CardWithAction
                                                    img="/food.png"
                                                    header="อาหารกลางวัน"
                                                    headerSize="20px"
                                                    title={get(foodRecommend, "Noon", "")}
                                                    titleSize="16px"
                                                    isLink={false}
                                                />
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
                                            <div>
                                                <CardWithAction
                                                    img="/food.png"
                                                    header="อาหารเย็น"
                                                    headerSize="20px"
                                                    title={get(foodRecommend, "Evening", "")}
                                                    titleSize="16px"
                                                    isLink={false}
                                                />
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                                :
                                <Box component="main" sx={{ p: 2 }}>
                                    <div>
                                        <center>
                                            <p>
                                                ไม่พบข้อมูล
                                            </p>
                                        </center>
                                    </div>
                                </Box>
                        }
                    </Box>
                </Box>
            </div></>
    );
}


DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    windowProp: PropTypes.func,
};

export default DrawerAppBar;

