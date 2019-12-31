import { GET_PROFILE } from '../config/constants';
import axios from 'axios';

export const getUser = () => {
	let token = localStorage.getItem('token');
	token = 'Bearer' + token;
	return {
		type: GET_PROFILE,
		payload: axios({
			method: 'GET',
			url: 'http://localhost:7000/api/v1/profile/',
			header: {
				Authorization: token
			}
		})
	};
};
