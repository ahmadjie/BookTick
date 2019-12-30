import React, { Component } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Event from '../components/Events';

export default class Home extends Component {
	render() {
		return (
			<div style={{ backgroundColor: '#fbe9e7' }}>
				<Header />
				<div style={{ width: '75%', margin: 'auto', backgroundColor: '#fbe9e7' }}>
					<Category />
					<Event />
				</div>
			</div>
		);
	}
}
