import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class EventDetails extends Component {
	state = {
		event: [],
		category: [],
		user: []
	};
	componentDidMount() {
		var queryString = window.location.search.slice(1);

		axios.get(`http://localhost:7000/api/v1/event/${queryString}`).then((res) => {
			this.setState({ event: res.data });
			this.setState({ category: res.data.category });
			this.setState({ user: res.data.createdBy });
		});
	}
	render() {
		return (
			<div style={{ backgroundColor: '#ffcdd2' }}>
				<Header />
				<Grid container style={{ margin: 'auto', width: '80%' }}>
					<Grid style={{ display: 'flex', margin: 'auto', itemAlign: 'center', justifyContent: 'center' }}>
						<img src={this.state.event.image} style={{ width: '93%', marginTop: '3%' }} />
					</Grid>
					<Grid container style={{ margin: '5%' }}>
						<Grid item xs={9}>
							<Typography variant="h4">{this.state.event.title}</Typography>
							<Typography variant="h6">{this.state.category.name}</Typography>
						</Grid>
						<Grid item xs={3} style={{ textAlign: 'center' }}>
							<Typography variant="h4">{this.state.event.price}</Typography>
						</Grid>
					</Grid>
					<Grid container style={{ margin: '5%' }}>
						<Grid item xs={4}>
							<Typography variant="h5">Hosted By </Typography>
							<Typography variant="h6">{this.state.user.name}</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="h5">Date Time </Typography>
							<Typography variant="h6">{this.state.event.starTime}</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="h5">Contact Person </Typography>
							<Typography variant="h6">{this.state.user.name}</Typography>
							<Typography variant="h6">{this.state.user.phone}</Typography>
							<Typography variant="h6">{this.state.user.email}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}
