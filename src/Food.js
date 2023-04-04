import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import HeaderLogo from './components/HeaderLogo';
import NavMenuResponsive from './components/NavMenuResponsive';
import NavMenu from './components/NavMenu';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import CardWithExpand from './components/CardWithExpand';
import CardNutritionWithExpand from './components/CardNutritionWithExpand';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const drawerWidth = 240;

function DrawerAppBar(props) {
    let { foodId } = useParams();

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
            <NavMenuResponsive />
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

    const [foodData, setFoodData] = useState({})
    const [nutritionData, setNutritionData] = useState({})
    const [ingredientData, setIngredientData] = useState("")
    const [cookingMethodData, setCookingMethod] = useState("")

    const fetchFoodData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/food/find-by-id`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    setFoodData(get(data, "data[0]", {}))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchNutritionData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/nutrition/find-by-food-id`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    setNutritionData(get(data, "data[0]", {}))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchIngredientData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/ingredient/find-by-food-id`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    setIngredientData(get(data, "data[0].Ingredients", ""))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchCookingMethodData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/cooking-method/find-by-food-id`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    setCookingMethod(get(data, "data[0].CookingMethods", ""))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchFoodData({
            food_id: foodId,
        })
        fetchNutritionData({
            food_id: foodId,
        })
        fetchIngredientData({
            food_id: foodId,
        })
        fetchCookingMethodData({
            food_id: foodId,
        })
    }, [])

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
            <Box component="main" sx={{ p: 2 }}>
                <Toolbar />
                <div>
                    <center>
                        <h1>
                            {get(foodData, "Name", "")}
                        </h1>
                    </center>
                </div>
                <Box>
                    <Grid container spacing={8}>
                        <Grid item xs={12} lg={4}>
                            <Item>
                                <div>
                                    <CardNutritionWithExpand
                                        title="โภชนาการ"
                                        data={nutritionData}
                                        img="/Nutri.png"
                                    />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Item>
                                <div>
                                    <CardWithExpand
                                        title="ส่วนประกอบ"
                                        data={ingredientData}
                                        img="/Ingre.png"
                                    />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Item>
                                <div>
                                    <CardWithExpand
                                        title="วิธีการทำ"
                                        data={cookingMethodData}
                                        img="/Cook.png"
                                    />
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
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
