import React, { Component } from 'react';
import Header from '../components/Header';

import axios from 'axios';

import { withRouter } from 'react-router';

class CategoriesDetails extends Component {
	state = {
		events: [],
		category: []
	};
	componentDidMount() {
		const { match } = this.props;
		axios.get(`http://localhost:7000/api/v1/category/${match.params.id}/events`).then((responses) => {
			this.setState({ events: responses.data });
		});
	}
	render() {
		// const { match } = this.props;
		// console.log(match.params.id);

		return (
			<div>
				<Header />
				{/* {console.log(this.state.events)} */}
				{this.state.events.map((event) => {
					return <p>{event.title}</p>;
				})}
			</div>
		);
	}
}

export default withRouter(CategoriesDetails);
