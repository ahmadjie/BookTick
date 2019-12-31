import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid, CardMedia, Button, Typography, Card, CardActionArea, CardContent, Avatar } from '@material-ui/core';
import { withRouter } from 'react-router';
import axios from 'axios';

class Profile extends Component {
	state = {
		user: [],
		error: false
	};
	componentDidMount() {
		const { match } = this.props;
		axios.get(`http://localhost:7000/api/v1/profile/${match.params.id}`).then((responses) => {
			this.setState({ user: responses.data });
		});
	}
	render() {
		console.log(this.state.user);
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
							<Grid item xs={4} style={{ marginBottom: '2%' }}>
								{/* <Link to={`/event/?${item.id}`} style={{ textDecoration: 'none', color: 'black' }}> */}
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
													123 harga
												</Typography>
											</Button>
											<CardMedia
												component="img"
												height="250px"
												image="https://pbs.twimg.com/profile_images/1130032650712801280/223KYI_z_400x400.jpg"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													judull...
												</Typography>

												<Typography variant="body2" color="textSecondary" component="p">
													descript
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>

								{/* </Link> */}
							</Grid>
							<Grid item xs={4} style={{ marginBottom: '2%' }}>
								{/* <Link to={`/event/?${item.id}`} style={{ textDecoration: 'none', color: 'black' }}> */}
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
													123 harga
												</Typography>
											</Button>
											<CardMedia
												component="img"
												height="250px"
												image="https://pbs.twimg.com/profile_images/1130032650712801280/223KYI_z_400x400.jpg"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													judull...
												</Typography>

												<Typography variant="body2" color="textSecondary" component="p">
													descript
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>

								{/* </Link> */}
							</Grid>
							<Grid item xs={4} style={{ marginBottom: '2%' }}>
								{/* <Link to={`/event/?${item.id}`} style={{ textDecoration: 'none', color: 'black' }}> */}
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
													123 harga
												</Typography>
											</Button>
											<CardMedia
												component="img"
												height="250px"
												image="https://pbs.twimg.com/profile_images/1130032650712801280/223KYI_z_400x400.jpg"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													judull...
												</Typography>

												<Typography variant="body2" color="textSecondary" component="p">
													descript
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</div>
								{/* </Link> */}
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);
