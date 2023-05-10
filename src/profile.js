import * as React from 'react';

import Link from '@mui/material/Link';
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { get, size } from 'lodash';
import { retrieveProfile, retrieveSelectedTempKidData, saveSelectedTempKidData } from 'utils/auth';
import { getThaiDateAgeFromInput, getThaiDateAgeFromNowString, getThaiDateString } from 'utils/helper';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const profile = retrieveProfile()
    const [kidList, setKidList] = useState([])
    const [selectedKid, setSelectedKid] = useState(null)
    const [selectedKidHistory, setSelectedKidHistory] = useState(null)
    const selectedKidData = retrieveSelectedTempKidData()
    const [ageLastest, setAgeLastest] = useState(null)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        if (selectedKidData && selectedKidData["KidID"]) {
            setSelectedKid(selectedKidData)
            fetchHistoryData(selectedKidData["KidID"])
        }
    }, [])

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

    const fetchKidData = async (request) => {
        // Call Api
        axios.post(`${API_URL}/api/kids/find-by-user-id`, request)
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    setKidList(get(data, "data", []))
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchHistoryData = async (kidId) => {
        // Call Api
        axios.post(`${API_URL}/api/history/find-all`, {
            kid_id: kidId
        })
            .then(function (response) {
                const { data, status } = response
                if (status == 200) {
                    const dataList = get(data, "data", [])
                    if (size(dataList) > 0) {
                        const lastestHistory = dataList[0]
                        setSelectedKidHistory(lastestHistory)
                        fetchAgeData(lastestHistory)
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchAgeData = async (lastestHistory) => {
        const age = getThaiDateAgeFromInput(get(selectedKidData, "DOB", ""), get(lastestHistory, "DMY", ""))
        setAgeLastest(age)
        const data = {
            year: get(age, "years", 0),
            month: get(age, "months", 0),
            gender: get(selectedKidData, "Gender", ""),
            height: get(selectedKidHistory, "Height", 0)
        }

        console.log(data)
    }

    useEffect(() => {
        fetchKidData({
            user_id: profile["id"]
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
            <div>
                <Box component="main" sx={{ p: 2 }}>
                    <Toolbar />
                    <div>

                        <center>

                            {
                                size(kidList) > 0 ?
                                    <>{kidList.map((kid) => {
                                        const DOB = get(kid, "DOB", "")
                                        const Gender = get(kid, "Gender", "")
                                        // const Height = get(kid, "Height", "")
                                        const KidID = get(kid, "KidID", "")
                                        const Name = get(kid, "Name", "")
                                        const SurName = get(kid, "SurName", "")
                                        // const UserId = get(kid, "UserId", "")
                                        // const Weight = get(kid, "Weight", "")
                                        return <>
                                            <Button style={{ flex: 1, flexDirection: 'column', backgroundColor: selectedKid && selectedKid["KidID"] == KidID ? "#FED470" : "transparent" }} onClick={() => {
                                                setSelectedKid(kid)
                                                fetchHistoryData(KidID)
                                                saveSelectedTempKidData(kid)
                                            }}>
                                                <img src="./baby-icon.png" alt="" width={250} height={250} />
                                                <h2>{Gender == "M" ? `เด็กชาย` : `เด็กหญิง`} {`${Name} ${SurName}`}</h2>
                                                <h3>{getThaiDateAgeFromNowString(DOB)}</h3>
                                            </Button>
                                        </>
                                    })}</>
                                    :
                                    <></>
                            }

                            <Link href="Page1">
                                <Button style={{ flex: 1, flexDirection: 'column' }}>
                                    <img src="./plus-sign.png" width={220} height={220} alt="" />
                                    <h4> เพิ่ม </h4>
                                </Button>
                            </Link>
                        </center>

                    </div>

                </Box>
            </div>

            {selectedKid && selectedKid["KidID"] &&
                <div style={{ margin: "5px 20px" }}>
                    <div>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <h2>
                                    การเจริญเติบโตของ {selectedKid["Gender"] === "M" ? `เด็กชาย` : `เด็กหญิง`} {`${selectedKid["Name"]} ${selectedKid["SurName"]}`}
                                    <Link href="Weight_Height">
                                        <Button>
                                            <img src="/add.png" width={50} height={50} alt="" />
                                        </Button>
                                    </Link>
                                </h2>
                                <h3>
                                    ข้อมูลล่าสุดเมื่อ {selectedKidHistory && selectedKidHistory["DMY"] ? getThaiDateString(selectedKidHistory["DMY"]) : ""}
                                </h3>
                            </Grid>
                            <Grid item>
                                <Link href="History">
                                    <Button>
                                        <img src="/History.png" alt="" width={60} height={50} />
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Box component="main" sx={{ p: 2 }}>
                            <h2>
                                <img src="/height (1).png" alt="" width={60} height={60} />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {selectedKidHistory && selectedKidHistory["Height"] ? selectedKidHistory["Height"] : "0"} เซนติเมตร

                            </h2>
                            {(get(ageLastest, "years", 0) >= 3 && get(ageLastest, "years", 0) < 13) &&
                                <img src="/progress1.png" alt="" style={{
                                    width: "100%",
                                    maxWidth: 500
                                }} />
                            }


                            <h2>
                                <img src="/weight (1).png" alt="" width={60} height={60} />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {selectedKidHistory && selectedKidHistory["Weight"] ? selectedKidHistory["Weight"] : "0"} กิโลกรัม
                            </h2>

                            {(get(ageLastest, "years", 0) >= 3 && get(ageLastest, "years", 0) < 13) &&
                                <img src="/progress2.png" alt="" style={{
                                    width: "100%",
                                    maxWidth: 500
                                }} />
                            }
                        </Box>
                    </div>
                </div>
            }
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
