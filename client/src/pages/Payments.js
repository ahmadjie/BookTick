import React, { Component } from 'react';
import Header from '../components/Header';
import { Typography, Container, Grid, Divider, Button } from '@material-ui/core';
// import { getTicket } from "../_actions/payments";
// import { getProfile } from "../_actions/user";
// import { connect } from "react-redux";
export default class Payment extends Component {
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
							padding: '20px'
						}}
					>
						<Container maxWidth="md">
							<div style={{ backgroundColor: '#ff5252', padding: '20px' }}>
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
											<Typography variant="body1">Is Bos</Typography>
											<Typography
												variant="body2"
												component="p"
												style={{
													fontFamily: 'poppins',
													fontWeight: 'bold'
												}}
											>
												id.User
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
												Face Value : RP 50.000
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
												id.confirm
											</Typography>
										</Grid>
									</div>
									<div style={{ padding: '10px' }}>
										<Grid container spacing={2}>
											<Grid item sm={9}>
												<Typography variant="h4" style={{ fontWeight: 'bold' }}>
													Raisa live in Concert
												</Typography>
												<Typography variant="body1">Fri,13 Des 2019 at 18.00</Typography>
												<Typography variant="body2">
													Jl. Pintu Satu Senayan, Gelora, Kecamatan Tanah Abang, Kota Jakarta
													Pusat, Daerah Khusus Ibukota Jakarta 10270
												</Typography>
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
						</Container>
						<Container maxWidth="md" style={{ width: '80%' }}>
							<Grid item xs={12} style={{ marginTop: '10px' }}>
								<Typography variant="h5" style={{ fontWeight: 'bold' }}>
									Shopping summary
								</Typography>
							</Grid>
							<Grid container>
								<Grid item xs={6} style={{ marginTop: '10px' }}>
									<Typography variant="body2" style={{ fontWeight: 'bold' }} color="textSecondary">
										Total Price ( 2 Item)
									</Typography>
								</Grid>
								<Grid item xs={6} style={{ marginTop: '10px', textAlign: 'end' }}>
									<Typography variant="body2" style={{ fontWeight: 'bold' }} color="textSecondary">
										Rp.600000
									</Typography>
								</Grid>
							</Grid>
						</Container>
						<Divider light style={{ width: '90%', margin: 'auto', marginTop: '3%', marginBottom: '3%' }} />
						<Container maxWidth="md" style={{ width: '80%' }}>
							<Grid item xs={12} style={{ marginTop: '10px' }}>
								<Typography variant="h5" style={{ fontWeight: 'bold' }}>
									Prove Payment
								</Typography>
							</Grid>
							<Grid container>
								<Grid item xs={6} style={{ marginTop: '10px' }}>
									<img
										src="https://miro.medium.com/max/3152/1*Ifpd_HtDiK9u6h68SZgNuA.png"
										style={{
											width: '187px',
											height: '187px',
											marginTop: '5%',
											border: '3px solid #000000'
										}}
									/>
									<Typography variant="body2" color="textSecondary">
										Upload Payment Proof
									</Typography>
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
						</Container>
					</div>
				</Container>
			</div>
		);
	}
}
