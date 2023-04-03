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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

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

    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
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

            <Box component="main" sx={{ p: 2 }}>
                <Toolbar />
                <Typography>
                    <Box>
                        <Grid container spacing={8}>
                            <Grid item xs={12} lg={4}>
                                <Item><div>
                                    <Card sx={{ maxWidth: 'auto' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image="/Nutri.png" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    โภชนาการ
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            {/* <Link href="Nutrition_details">
                                                <Button size="medium" color="primary">
                                                    เลือก
                                                </Button>
                                            </Link> */}
                                            <ExpandMore
                                                expand1={expanded1}
                                                onClick={handleExpandClick1}
                                                aria-expanded={expanded1}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>Method:</Typography>
                                                <Typography paragraph>
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                                    aside for 10 minutes.
                                                </Typography>
                                                <Typography paragraph>
                                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                                </Typography>
                                                <Typography paragraph>
                                                    Add rice and stir very gently to distribute. Top with artichokes and
                                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                                    mussels, tucking them down into the rice, and cook again without
                                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                                    minutes more. (Discard any mussels that don&apos;t open.)
                                                </Typography>
                                                <Typography>
                                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Item><div>
                                    <Card sx={{ maxWidth: 'auto' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image="/Ingre.png" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    ส่วนประกอบ
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                        <ExpandMore
                                                expand2={expanded2}
                                                onClick={handleExpandClick2}
                                                aria-expanded={expanded2}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                            {/* <Link href="Ingredient_details">

                                                <Button size="medium" color="primary">
                                                    เลือก
                                                </Button>
                                            </Link> */}
                                        </CardActions>
                                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>Method:</Typography>
                                                <Typography paragraph>
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                                    aside for 10 minutes.
                                                </Typography>
                                                <Typography paragraph>
                                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                                </Typography>
                                                <Typography paragraph>
                                                    Add rice and stir very gently to distribute. Top with artichokes and
                                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                                    mussels, tucking them down into the rice, and cook again without
                                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                                    minutes more. (Discard any mussels that don&apos;t open.)
                                                </Typography>
                                                <Typography>
                                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                                </Item>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Item><div>
                                    <Card sx={{ maxWidth: '200' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height='200'
                                                image="/Cook.png" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    วิธีการทำ
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            {/* <Link href="CookingMethods_details">


                                                <Button size="medium" color="primary">
                                                    เลือก
                                                </Button>
                                            </Link> */}
                                             <ExpandMore
                                                expand3={expanded3}
                                                onClick={handleExpandClick3}
                                                aria-expanded={expanded3}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph textAlign={'left'}>
                                                แกงจืดฟักหมูสับ<br></br>
                                                1. นําฟักเขียว แครอท และเห็ดหอมสดล้างนํ้าให้สะอาด<br></br>
2. ปอกเปลือกและหั่นฟักเขียว แครอท เห็ดหอม เตรียมไว้<br></br>
3. หมักหมูด้วยซีอิ๊วขาว<br></br>
4. ใส่นํ้าลงในหม้อ ยกขึ้นบนเตาไฟจนเดือด ใส่หมูหมักปั้นเป็นก้อนๆ ลงไป<br></br>
5. ใส่ฟักเขียว แครอท และเห็ดหอมลงไปต้มจนสุก<br></br>
6. โรยด้วยต้นหอมผักชีพร้อมเสิร์ฟ<br></br>
                                                </Typography>
                                                <Typography paragraph textAlign={'left'}>
                                                ไข่ตุ๋น<br></br>
1. ตีไข่ลงในชาม เติมนํ้าเปล่าและซีอิ๊วขาวคนให้เข้ากัน โดยวิธีทําไข่ตุ๋นให้เนียน
นั้นคือการนําไข่ไปกรองผ่านกระชอนก่อน 1 ครั้ง<br></br>
2. ใส่แครอทหั่นเต๋าลงไปในถ้วยที่จะใช้นึ่งไข่<br></br>
3. ใสไข่ ที่กรองผ่าานกระชอนลงไปในถ้วย แล้วนำไขํตุ๋นไปนึ่งประมาณ 20-30 นาที<br></br>
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                                </Item>
                            </Grid>
                        </Grid>

                    </Box>

                </Typography>
            </Box></>
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
