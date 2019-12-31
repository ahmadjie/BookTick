import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';
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
								<Grid item xs={4} style={{ boxShadow: '2px 2px #ede7f6', marginBottom: '2%' }}>
									<Link to={`/event/?${event.id}`} style={{ textDecoration: 'none', color: 'black' }}>
										<div style={{ margin: '5px' }}>
											<Card>
												<CardActionArea>
													<CardMedia component="img" height="250px" image={event.image} />
													<CardContent>
														<Typography gutterBottom variant="h5" component="h2">
															{event.title}
														</Typography>

														<Typography variant="body1" color="textSecondary" component="p">
															{event.price}
														</Typography>
														<Typography variant="body2" color="textSecondary" component="p">
															{event.description}
														</Typography>
													</CardContent>
												</CardActionArea>
											</Card>
										</div>
									</Link>
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
