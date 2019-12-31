import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withRouter } from 'react-router';

class ProfileComponent extends Component {
	render() {
		return (
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
									Ahmad Adjie
									<Button
										variant="outlined"
										size="small"
										style={{ backgroundColor: '#ff5252', color: 'white', marginLeft: '30px ' }}
									>
										Edit Profile
									</Button>
								</h1>
							</div>
							<Typography variant="body1" color="textSecondary">
								30-01-1999
							</Typography>
							<Typography variant="body1" color="textSecondary">
								081818181881
							</Typography>
							<Typography variant="body1" color="textSecondary">
								gmail@gmail.com
							</Typography>
						</div>
					</Grid>
					<Grid item xs={3} style={{ width: 128, height: 128 }}>
						<Avatar
							style={{ width: 128, height: 128, marginTop: '6%', marginLeft: '75%' }}
							src="https://pbs.twimg.com/profile_images/1130032650712801280/223KYI_z_400x400.jpg"
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(ProfileComponent);
