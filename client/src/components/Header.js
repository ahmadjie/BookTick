import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function Header() {
	const token = localStorage.getItem('token');
	let auth = false;
	if (token !== null) {
		auth = true;
	}

	const classes = useStyles();

	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const onSubmit = () => {
		localStorage.clear();
		window.location = '/home';
	};

	return (
		<div>
			<AppBar position="static" style={{ backgroundColor: '#ff5252' }}>
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						<Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
							BookTick
						</Link>
					</Typography>
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<Avatar src="https://pbs.twimg.com/profile_images/1130032650712801280/223KYI_z_400x400.jpg" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to="/login"
										style={{ textDecoration: 'none', color: 'black' }}
										onClick={onSubmit}
									>
										Logout
									</Link>
								</MenuItem>
							</Menu>
						</div>
					)}
					{auth || (
						<div>
							<Link to="/Register" style={{ textDecoration: 'none' }}>
								<Button variant="contained" style={{ marginRight: '10px', backgroundColor: '#fafafa' }}>
									Register
								</Button>
							</Link>
							<Link to="/login" style={{ textDecoration: 'none' }}>
								<Button variant="contained" style={{ backgroundColor: '#fafafa' }}>
									Login
								</Button>
							</Link>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// export default class Header extends Component {
// 	render() {
// 		return (
// 			<div
// 				style={{
// 					width: '100%',
// 					backgroundColor: '#ff5252',
// 					boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
// 					paddingBottom: '1%'
// 				}}
// 			>
// 				<Grid container>
// 					<Grid item xs={9}>
// 						<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
// 							<Typography variant="h5" style={{ marginLeft: '5%' }}>
// 								DUMB-TICK
// 							</Typography>
// 						</Link>
// 					</Grid>
// 					<Grid item xs={3}>
// 						<Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
// 							<Button color="inherit">Login</Button>
// 						</Link>
// 						<Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
// 							<Button color="inherit">Register</Button>
// 						</Link>
// 					</Grid>
// 				</Grid>
// 			</div>
// 		);
// 	}
// }
