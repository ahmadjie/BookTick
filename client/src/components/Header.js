import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

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
	//check token
	const token = localStorage.getItem('token');
	let auth = false;
	if (token !== null) {
		auth = true;
	}

	const classes = useStyles();
	//style menu item
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);
	//set user id
	const [ user, setUser ] = useState([]);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	//handle click logout
	const onSubmit = () => {
		localStorage.clear();
	};

	//component didMount
	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios({
				method: 'GET',
				url: 'http://localhost:7000/api/v1/profile/',
				headers: {
					Authorization: 'Bearer ' + token
				}
			});
			setUser(res.data.data);
		};
		fetchUser();
	}, []);

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
								<Avatar src={`${user.image}`} />
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
								<MenuItem onClick={handleClose}>
									{/* LINK USER BY ID */}
									<Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
										Profile
									</Link>
								</MenuItem>

								<MenuItem onClick={handleClose}>
									<Link to="/" style={{ textDecoration: 'none', color: 'black' }} onClick={onSubmit}>
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
