import { POST_FAVORITE } from '../config/constants';
import axios from 'axios';

// export const getUser = () => {
// 	let token = localStorage.getItem('token');
// 	token = 'Bearer' + token;
// 	return {
// 		type: GET_PROFILE,
// 		payload: axios({
// 			method: 'GET',
// 			url: 'http://localhost:7000/api/v1/profile/',
// 			header: {
// 				Authorization: token
// 			}
// 		})
// 	};
// };

export const userSetFavoriteEvent = (eventId) => {
	let getToken = localStorage.getItem('token');
	const token = 'Bearer ' + getToken;
	return {
		type: POST_FAVORITE,
		payload: axios({
			method: 'POST',
			url: 'http://localhost:7000/api/v1/favorite',
			headers: {
				Authorization: token
			},
			data: eventId
		})
	};
};
