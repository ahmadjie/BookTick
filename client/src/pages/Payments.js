import React, { Component } from 'react';
import Header from '../components/Header';
import { Typography, Container, Grid, Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import Footer from '../components/Footer';
export class Payment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: []
		};
	}

	componentDidMount() {
		const getToken = localStorage.getItem('token');
		axios
			.get(`http://localhost:7000/api/v1/user/orders?status=pending`, {
				headers: {
					Authorization: 'Bearer ' + getToken
				}
			})
			.then((responses) => {
				if (responses.data.length > 0) {
					this.setState({ orders: responses.data });
				}
			});
	}

	onChangeAttachment = (e) => {
		this.setState({ attachment: e.target.value });
	};
	render() {
		const checkToken = localStorage.getItem('token')
		if (!checkToken) {
			window.location = "/login"
		} else {
			return (
				<div>
					<Header />
					<Container maxWidth="md" style={{ marginTop: '50px' }}>
						<Typography
							variant="h5"
							component="p"
							color="secondary"
							style={{
								backgroundColor: 'rgb(255, 18, 18)',
								color: '#fff',
								width: '50%',
								textAlign: 'center'
							}}
						>
							Payment
						</Typography>
						<div
							style={{
								borderTop: '8px solid rgb(255, 18, 18)',
								backgroundColor: '#fff',
								padding: '20px'
							}}
						>
							{this.state.orders.map((order) => {
								return (
									<div>
										<Container maxWidth="md">
											<div style={{ backgroundColor: '#ff5252', padding: '20px', marginTop: '40px' }}>
												<div style={{ backgroundColor: '#fff' }}>
													<div
														style={{
															backgroundColor: '#ccc',
															padding: '5px 10px',
															display: 'flex',
															justifyContent: 'space-between'
														}}
													>
														<Grid item xs={2}>
															<Typography variant="body1">{order.buyer.name}</Typography>
															<Typography
																variant="body2"
																component="p"
																style={{
																	fontFamily: 'poppins',
																	fontWeight: 'bold'
																}}
															>
																{order.buyer.id}
															</Typography>
														</Grid>
														<Grid item xs={3}>
															<Typography
																variant="body2"
																component="p"
																color="textSecondary"
																style={{
																	fontFamily: 'poppins',
																	fontWeight: 'bold'
																}}
															>
																Quantity:{order.quantity} Price :{order.totalPrice}
															</Typography>
															<Typography
																variant="body2"
																component="p"
																color="textSecondary"
																style={{
																	fontFamily: 'poppins',
																	fontWeight: 'bold'
																}}
															>
																Status : {order.status}
															</Typography>
														</Grid>
													</div>
													<div style={{ padding: '10px' }}>
														<Grid container spacing={2}>
															<Grid item sm={9}>
																<Typography variant="h4" style={{ fontWeight: 'bold' }}>
																	{order.event.title}
																</Typography>
																<Typography variant="body1">
																	{order.event.starTime}
																</Typography>
																<Typography variant="body2">
																	{order.event.address}
																</Typography>
															</Grid>
															<Grid
																item
																sm={3}
																justify="center"
																alignItems="center"
																style={{ display: 'flex' }}
															>
																<Link
																	to={`/payment/${order.id}`}
																	style={{ color: 'none', textDecoration: 'none' }}
																>
																	<Button
																		large
																		variant="contained"
																		style={{
																			backgroundColor: '#ff5252',
																			color: '#fff'
																		}}
																	>
																		Checkout
																	</Button>
																</Link>
															</Grid>
														</Grid>
													</div>
												</div>
											</div>
										</Container>
									</div>
								);
							})}
						</div>
					</Container>
					<Footer />
				</div>
			);
		}
	}
}

export default withRouter(Payment);

{
	/* <Container maxWidth="md" style={{ width: '80%' }}>
	<Grid item xs={12} style={{ marginTop: '10px' }}>
		<Typography variant="h5" style={{ fontWeight: 'bold' }}>
			Shopping summary
		</Typography>
	</Grid>
	<Grid container>
		<Grid item xs={6} style={{ marginTop: '10px' }}>
			<Typography
				variant="body2"
				style={{ fontWeight: 'bold' }}
				color="textSecondary"
			>
				Total Price ({order.quantity} Item)
			</Typography>
		</Grid>
		<Grid item xs={6} style={{ marginTop: '10px', textAlign: 'end' }}>
			<Typography
				variant="body2"
				style={{ fontWeight: 'bold' }}
				color="textSecondary"
			>
				{order.totalPrice}
			</Typography>
		</Grid>
	</Grid>
</Container>
<Divider
	light
	style={{ width: '90%', margin: 'auto', marginTop: '3%', marginBottom: '3%' }}
/>
<Container maxWidth="md" style={{ width: '80%' }}>
	<Grid item xs={12} style={{ marginTop: '10px' }}>
		<Typography variant="h5" style={{ fontWeight: 'bold' }}>
			Prove Payment
		</Typography>
	</Grid>
	<Grid container>
		<Grid item xs={6} style={{ marginTop: '10px' }}>
			<img src={this.state.attachment} style={{ width: '100%' }} />
			<TextField
				id="standard-basic"
				label="Upload Bukti Pembayaran"
				value={this.state.attachment}
				onChange={this.onChangeAttachment}
				required
				style={{ width: '100%' }}
			/>
		</Grid>
		<Grid item xs={6} style={{ marginTop: '10px', textAlign: 'end' }}>
			<Button
				large
				variant="contained"
				style={{ backgroundColor: '#ff5252', color: '#fff' }}
			>
				Confirm
			</Button>
		</Grid>
	</Grid>
</Container> */
}
