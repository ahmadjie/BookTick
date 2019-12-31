import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../_actions/events';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CardMedia, Button } from '@material-ui/core';

export class Event extends Component {
	componentDidMount() {
		this.props.getEvents();
	}
	render() {
		const { data, isLoading, error } = this.props.events;

		if (isLoading) {
			return <div>Mohon Tunggu</div>;
		}

		if (error) {
			return (
				<div>
					<h1>eror</h1>
				</div>
			);
		}

		return (
			<div style={{ marginTop: '3%' }}>
				<h1 style={{ marginTop: '2%', color: '#ff5252' }}>Event</h1>
				<Grid container style={{ marginTop: '2%' }}>
					{data.map((item) => {
						return (
							<Grid item xs={4} style={{ marginBottom: '2%' }}>
								<Link to={`/event/?${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
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
														{item.price}
													</Typography>
												</Button>
												<CardMedia component="img" height="250px" image={item.image} />
												<CardContent>
													<Typography gutterBottom variant="h5" component="h2">
														{item.title.substring(0, 15)}...
													</Typography>

													<Typography variant="body2" color="textSecondary" component="p">
														{item.description}
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
		);
	}
}

const mapStateToProps = (state) => {
	return {
		events: state.events
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getEvents: () => {
			dispatch(getEvents());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
