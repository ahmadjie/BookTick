import React, { Component } from 'react';
import Header from '../components/Header';
import { Typography, Container, Grid } from '@material-ui/core';
import Footer from '../components/Footer';
import axios from 'axios';
import { withRouter } from 'react-router';

class MyTicket extends Component {
	state = {
		orders: []
	};
	componentDidMount() {
		const getToken = localStorage.getItem('token');

		axios
			.get(`http://localhost:7000/api/v1//user/orders?status=success`, {
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
	render() {
		const img =
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png';
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
						My Ticket
					</Typography>
					<div
						style={{
							borderTop: '8px solid rgb(255, 18, 18)',
							backgroundColor: '#fff',
							padding: '10px'
						}}
					>
						<Container maxWidth="md">
							{this.state.orders.map((order) => {
								return (
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
														<Typography variant="body1">{order.event.starTime}</Typography>
														<Typography variant="body2">{order.event.address}</Typography>
													</Grid>
													<Grid item sm={2}>
														<div
															style={{
																backgroundImage: `url(${img})`,
																width: '180px',
																height: '180px',
																backgroundSize: 'cover'
															}}
														/>
													</Grid>
												</Grid>
											</div>
										</div>
									</div>
								);
							})}
						</Container>
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default withRouter(MyTicket);

// <div style={{ backgroundColor: '#ff5252', padding: '20px' }}>
// <div style={{ backgroundColor: '#fff' }}>
// 	<div
// 		style={{
// 			backgroundColor: '#ccc',
// 			padding: '5px 10px',
// 			display: 'flex',
// 			justifyContent: 'space-between'
// 		}}
// 	>
// 		<Grid item xs={2}>
// 			<Typography variant="body1">Is Bos</Typography>
// 			<Typography
// 				variant="body2"
// 				component="p"
// 				style={{
// 					fontFamily: 'poppins',
// 					fontWeight: 'bold'
// 				}}
// 			>
// 				id.User
// 			</Typography>
// 		</Grid>
// 		<Grid item xs={3}>
// 			<Typography
// 				variant="body2"
// 				component="p"
// 				color="textSecondary"
// 				style={{
// 					fontFamily: 'poppins',
// 					fontWeight: 'bold'
// 				}}
// 			>
// 				Face Value : RP 50.000
// 			</Typography>
// 			<Typography
// 				variant="body2"
// 				component="p"
// 				color="textSecondary"
// 				style={{
// 					fontFamily: 'poppins',
// 					fontWeight: 'bold'
// 				}}
// 			>
// 				id.confirm
// 			</Typography>
// 		</Grid>
// 	</div>
// 	<div style={{ padding: '10px' }}>
// 		<Grid container spacing={2}>
// 			<Grid item sm={9}>
// 				<Typography variant="h4" style={{ fontWeight: 'bold' }}>
// 					Raisa live in Concert
// 				</Typography>
// 				<Typography variant="body1">Fri,13 Des 2019 at 18.00</Typography>
// 				<Typography variant="body2">
// 					Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota
// 					Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270
// 				</Typography>
// 			</Grid>
// 			<Grid item sm={2}>
// 				<div
// 					style={{
// 						backgroundImage: `url(${img})`,
// 						width: '180px',
// 						height: '180px',
// 						backgroundSize: 'cover'
// 					}}
// 				/>
// 			</Grid>
// 		</Grid>
// 	</div>
// </div>
// </div>
