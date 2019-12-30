import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../_actions/categories';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Category extends Component {
	componentDidMount() {
		this.props.getCategories();
	}

	render() {
		const { data, isLoading, error } = this.props.categories;

		if (isLoading) {
			return (
				<div>
					<h1>ini loading</h1>
				</div>
			);
		}
		if (error) {
			return (
				<div>
					<h1>eror</h1>
				</div>
			);
		}

		return (
			<div>
				<h1 style={{ justifyContent: 'center', textAlign: 'center', color: '#ff5252' }}> Category </h1>
				<Grid
					container
					style={{
						marginTop: '2%',
						backgroundColor: '#ff5252',
						justifyContent: 'center',
						boxShadow: ' 2px 2px 5px 0px rgba(0,0,0,0.75)'
					}}
				>
					{data.map((item) => {
						return (
							<Link to={`/category/${item.id}/events`} style={{ textDecoration: 'none', color: 'black' }}>
								<Grid item xs={3} style={{ margin: '20px', textAlign: 'center' }}>
									<Grid style={{ color: 'white' }}>{item.name}</Grid>
								</Grid>
							</Link>
						);
					})}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCategories: () => {
			dispatch(getCategories());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
