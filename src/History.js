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
import { getThaiDateAgeFromNowString, getThaiDateString, getThaiDateAgeFromInputString } from 'utils/helper';
const API_URL = process.env.REACT_APP_API_ENDPOINT;

const drawerWidth = 240;

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const selectedKidData = retrieveSelectedTempKidData()
	const [selectedKidHistory, setSelectedKidHistory] = useState([])

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	useEffect(() => {
		console.log("selectedKidData:", selectedKidData)
		if (!selectedKidData) {
			window.location.href = '/profile'
		} else {
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
						setSelectedKidHistory(dataList)
					}
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

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
				<Box component="main" sx={{}}>
					<Toolbar />
					<div>
						<center>
							<Button style={{ flex: 1, flexDirection: 'column' }} >
								<img src="./baby-icon.png" alt="" width={250} height={250} />
								<h2>{selectedKidData["Gender"] == "M" ? `เด็กชาย` : `เด็กหญิง`} {`${selectedKidData["Name"]} ${selectedKidData["SurName"]}`}</h2>
								<h3>{getThaiDateAgeFromNowString(selectedKidData["DOB"])}</h3>
							</Button>
						</center>
					</div>
					{
						size(selectedKidHistory) > 0 ?
							<>
								{selectedKidHistory.map((history) => {
									return <Grid container>
										<Grid item xs={0} sm={2} md={3}></Grid>
										<Grid item xs={12} sm={8} md={6}>
											<div style={{ backgroundColor: "#fff" }}>
												<div style={{ backgroundColor: "#ddd", height: 20 }}></div>
												<Grid container style={{ padding: 20 }}>
													<Grid item xs={6}>
														<div style={{ textAlign: "left", height: 50, display: "flex", alignItems: "center" }}><img src="/height (1).png" alt="" width={40} style={{ marginRight: 10 }} /> <span style={{ fontSize: 20 }}>{history && history["Height"] ? history["Height"] : "0"} เซนติเมตร</span></div>
														<div style={{ textAlign: "left", height: 50, display: "flex", alignItems: "center" }}><img src="/weight (1).png" alt="" width={40} style={{ marginRight: 10 }} /> <span style={{ fontSize: 20 }}>{history && history["Weight"] ? history["Weight"] : "0"} กิโลกรัม</span></div>
													</Grid>
													<Grid item xs={6}>
														<div style={{ textAlign: "right", height: 50, display: "grid", alignItems: "center"  }}>{history && history["DMY"] ? getThaiDateString(history["DMY"]) : ""}</div>
														<div style={{ textAlign: "right", height: 50, display: "grid", alignItems: "center"  }}>{history && history["DMY"] && selectedKidData && selectedKidData["DOB"] ? getThaiDateAgeFromInputString(selectedKidData["DOB"],history["DMY"]) : ""}</div>
													</Grid>
												</Grid>
											</div>
										</Grid>
										<Grid item xs={0} sm={2} md={3}></Grid>
									</Grid>
								})}
							</>
							:
							<></>
					}

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
