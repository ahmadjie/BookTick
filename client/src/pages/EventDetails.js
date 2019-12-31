import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid, Card, Button, Divider } from '@material-ui/core';
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

				<Card style={{ margin: 'auto', width: '80%', marginTop: '10%', backgroundColor: '#ffcdd2' }}>
					<Grid style={{ display: 'flex', margin: 'auto', itemAlign: 'center', justifyContent: 'center' }}>
						<img src={this.state.event.image} style={{ width: '100%' }} />
					</Grid>
					<Grid container style={{ margin: '5%' }}>
						<Grid item xs={8}>
							<Typography variant="h4">{this.state.event.title}</Typography>
							<Typography variant="body1" style={{ color: '#ff5252', marginTop: '5%' }}>
								{this.state.category.name}
							</Typography>
						</Grid>
						<Grid item xs={4} style={{ textAlign: 'left', color: '#ff5252' }}>
							<div style={{ textAlign: 'center' }}>
								<Typography variant="h4" style={{ fontWeight: 'bold' }}>
									{this.state.event.price}
								</Typography>
							</div>
							<div style={{ marginTop: '10%' }}>
								<Button
									variant="outlined"
									size="small"
									style={{ backgroundColor: 'white', color: '#ff5252', marginRight: '2%' }}
								>
									-
								</Button>
								0
								<Button
									variant="outlined"
									size="small"
									style={{ backgroundColor: 'white', color: '#ff5252', marginLeft: '2%' }}
								>
									+
								</Button>
								<Button
									variant="outlined"
									size="small"
									style={{ backgroundColor: '#ff5252', color: 'white', marginLeft: '2%' }}
								>
									BUY
								</Button>
							</div>
						</Grid>
					</Grid>
					<Divider style={{ margin: '5%' }} />
					<Grid container style={{ margin: '5%' }}>
						<Grid item xs={4}>
							<Typography variant="h5" style={{ fontWeight: 'bold' }}>
								Hosted By
							</Typography>
							<Typography variant="body1" color="textSecondary">
								{this.state.user.name}
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="h5" style={{ fontWeight: 'bold' }}>
								Date Time
							</Typography>
							<Typography variant="body1" color="textSecondary">
								{this.state.event.starTime}
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="h5" style={{ fontWeight: 'bold' }}>
								Contact Person
							</Typography>
							<Typography variant="body1" color="textSecondary">
								{this.state.user.name}
							</Typography>
							<Typography variant="body1" color="textSecondary">
								{this.state.user.phone}
							</Typography>
							<Typography variant="body1" color="textSecondary">
								{this.state.user.email}
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</div>
		);
	}
}
