import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid, CardMedia, Button, Typography, Card, CardActionArea, CardContent, Avatar } from '@material-ui/core';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
	state = {
		user: [],
		favorites: [],
		error: false
	};
	componentDidMount() {
		const { match } = this.props;
		axios.get(`http://localhost:7000/api/v1/profile/${match.params.id}`).then((responses) => {
			this.setState({ user: responses.data });
		});
		axios.get(`http://localhost:7000/api/v1/user/${match.params.id}/favorite`).then((responses) => {
			if (responses.data.length > 0) {
				this.setState({ favorites: responses.data });
			}
		});
	}
	render() {
		return (
			<div style={{ backgroundColor: '#fbe9e7' }}>
				<Header />
				<div style={{ width: '75%', margin: 'auto' }}>
					<div style={{ marginTop: '5%', color: '#ff5252' }}>
						<h1>Profile</h1>
					</div>
					<div style={{ width: '100%' }}>
						<Grid container justify="flex-start" alignContent="flex-start">
							<Grid item xs={9} style={{ display: 'flex', flexDirection: 'row' }}>
								<div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'row',

											paddingRight: '159px'
										}}
									>
										<h1 style={{ color: '#757575' }}>
											{this.state.user.name}
											<Button
												variant="outlined"
												size="small"
												style={{
													backgroundColor: '#ff5252',
													color: 'white',
													marginLeft: '30px '
												}}
											>
												Edit Profile
											</Button>
										</h1>
									</div>
									<Typography variant="body1" color="textSecondary">
										@{this.state.user.username}
									</Typography>
									<Typography variant="body1" color="textSecondary">
										{this.state.user.phone}
									</Typography>
									<Typography variant="body1" color="textSecondary">
										{this.state.user.email}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={3} style={{ width: 128, height: 128 }}>
								<Avatar
									style={{ width: 128, height: 128, marginTop: '6%', marginLeft: '75%' }}
									src={`${this.state.user.image}`}
								/>
							</Grid>
						</Grid>
					</div>

					{/* FAVORITE */}

					<div style={{ marginTop: '5%', color: '#ff5252' }}>
						<h1>Favorite</h1>
					</div>
					<div style={{ width: '100%' }}>
						<Grid container style={{ marginTop: '2%' }}>
							{this.state.favorites.map((favorite) => {
								return (
									<Grid item xs={4} style={{ marginBottom: '2%' }}>
										<Link
											to={`/event/${favorite.eventId}`}
											style={{ textDecoration: 'none', color: 'black' }}
										>
											<div style={{ margin: '5px' }}>
												<Card>
													<CardActionArea>
														<Button
															disabled
															style={{
																position: 'absolute',
																top: '10px',
																right: '10px',
																backgroundColor: 'white',
																padding: '10px'
															}}
														>
															<Typography
																variant="body1"
																color="textSecondary"
																style={{ color: '#ff5252' }}
															>
																{favorite.event.price}
															</Typography>
														</Button>
														<CardMedia
															component="img"
															height="250px"
															image={`${favorite.event.image}`}
														/>
														<CardContent>
															<Typography gutterBottom variant="h5" component="h2">
																{favorite.event.title}
															</Typography>

															<Typography
																variant="body2"
																color="textSecondary"
																component="p"
															>
																{favorite.event.description.substring(0, 30)}
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</div>
										</Link>
									</Grid>
								);
							})}
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);
