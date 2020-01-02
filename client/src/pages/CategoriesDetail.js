import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CardMedia, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter } from 'react-router';

class CategoriesDetails extends Component {
	state = {
		events: [],
		category: '',
		error: false
	};
	componentDidMount() {
		const { match } = this.props;
		axios.get(`http://localhost:7000/api/v1/category/${match.params.id}/events`).then((responses) => {
			if (responses.data.length > 0) {
				this.setState({ events: responses.data });
			}
		});
		axios.get(`http://localhost:7000/api/v1/category/${match.params.id}`).then((responses) => {
			this.setState({ category: responses.data.name });
		});
	}
	render() {
		if (this.state.error) {
			return (
				<div
					style={{
						backgroundColor: '#fbe9e7',
						width: '100%',
						height: '100%',
						position: 'fixed',
						overflow: 'auto',
						top: 0,
						bottom: 0
					}}
				>
					<Header />
					<h1 style={{ color: '#ff5252' }}>NOT FOUND</h1>
				</div>
			);
		}
		return (
			<div
				style={{
					backgroundColor: '#fbe9e7',
					width: '100%',
					height: '100%',
					position: 'fixed',
					overflow: 'auto',
					top: 0,
					bottom: 0
				}}
			>
				<Header />
				<div style={{ margin: 'auto', width: '80%' }}>
					<h1 style={{ color: '#ff5252', marginTop: '5%' }}>{this.state.category}</h1>
					<Grid container>
						{this.state.events.map((event) => {
							return (
								<Grid item xs={4} style={{ marginBottom: '2%' }}>
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
														{event.price}
													</Typography>
												</Button>
												<CardMedia component="img" height="250px" image={event.image} />
												<CardContent>
													<Grid container style={{ display: 'flex' }}>
														<Grid item xs={11}>
															<Link
																to={`/event/${event.id}`}
																style={{ textDecoration: 'none', color: 'black' }}
															>
																<Typography gutterBottom variant="h5" component="h2">
																	{event.title.substring(0, 30)}
																</Typography>
															</Link>
														</Grid>
														<Grid item xs={1}>
															<FavoriteIcon />
														</Grid>
													</Grid>

													<Typography variant="body2" color="textSecondary" component="p">
														{event.description.substring(0, 60)}
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</div>
								</Grid>
							);
							// return <p>{event.title}</p>;
						})}
					</Grid>
				</div>
			</div>
		);
	}
}

export default withRouter(CategoriesDetails);
