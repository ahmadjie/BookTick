import React, { Component } from 'react';

import { TextField } from '@material-ui/core';

class Search extends Component {
	render() {
		return (
			<TextField color ="Secondary"label="Search" type="text" fullWidth style={{ width: '95%', margin: 'auto', marginTop: '5%' }} />
		);
	}
}

export default Search;
