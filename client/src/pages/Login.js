import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { login } from '../config/api';

const cardStyles = makeStyles({
	card: {
		minWidth: 275
	}
});

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	onChangeUsername = (e) => {
		this.setState({ username: e.target.value });
	};
	onChangePassword = (e) => {
		this.setState({ password: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const user = {
			username: this.state.username,
			password: this.state.password
		};

		login(user).then(() => {
			if (localStorage.getItem('token')) {
				window.location = '/home';
			} else {
				alert('username atau Password anda salah');
				console.log('eror');
			}
		});
	};

	render() {
		return (
			<div style={{ display: 'flex',justifyContent: 'center',alignItems: 'center', height: '100vh',backgroundColor: '#ff5252'}}>
				<Grid item xs={12}>
					<Card className={cardStyles.card} style={{ margin: 'auto', width: '50%', backgroundColor: '#fbe9e7', color: 'black' }}>
						<CardContent>
							<Grid container direction="column" justify="center" alignItems="center">
								<form onSubmit={this.onSubmit} autoComplete="off" fullWidth style={{ textAlign: 'center', itemAlign: 'center', marginTop: '4%' }}>
									<div style={{ width: '100%', margin: 'auto' }}>
										<Typography variant="h4">Sign in with username</Typography>
									</div>
									
									<TextField id="standard-basic" value={this.state.username} onChange={this.onChangeUsername} label="Username" required style={{ width: '75%' }}/>
									<br />
									<TextField id="standard-basic" label="Password" required type="password" value={this.state.password} onChange={this.onChangePassword} style={{ width: '75%' }}/>
									<br />
									<Button variant="outlined" type="submit" style={{ marginTop: '5%', width: '75%' }}>
										Login
									</Button>
						
								</form>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</div>
		);
	}
}
