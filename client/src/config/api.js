import axios from 'axios';

export const login = (user) => {
	return axios
		.post('http://localhost:7000/api/v1/login', {
			username: user.username,
			password: user.password
		})
		.then((response) => {
			if (response.data.data.token !== undefined) {
				localStorage.setItem('token', response.data.data.token);
				return response.data;
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

export const register = (user) => {
	return axios
		.post('http://localhost:7000/api/v1/register', {
			name: user.name,
			email: user.email,
			username: user.username,
			password: user.password,
			image: 'https://reactjs.org/logo-og.png'
		})
		.then((response) => {
			if (response.data.data.message === 'success') {
				alert('Success Register');
				window.location = '/login';
				// localStorage.setItem('token', response.data.data.token);
				// return response.data;
			} else {
				alert('eror');
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

export const favorite = (eventId) => {
	const getToken = localStorage.getItem('token');
	return axios
		.post(
			'http://localhost:7000/api/v1/favorite',
			{
				eventId: eventId.eventId
			},
			{
				headers: {
					Authorization: 'Bearer ' + getToken
				}
			}
		)
		.then((response) => {
			if (response) {
				// localStorage.setItem('token', response.data.data.token);
				// return response.data;
			} else {
				alert('eror');
			}
		})
		.catch((err) => {
			// console.log(err);
		});
};

export const addEvent = (event) => {
	const getToken = localStorage.getItem('token');
	return axios
		.post(
			'http://localhost:7000/api/v1/event/',
			{
				title: event.title,
				categoryId: event.categoryId,
				starTime: event.starTime,
				endTime: event.endTime,
				price: event.price,
				description: event.description,
				address: event.address,
				urlmaps: event.urlmaps,
				image: event.image
			},
			{
				headers: {
					Authorization: 'Bearer ' + getToken
				}
			}
		)
		.then((response) => {
			if (response) {
				window.location = '/home';
				// localStorage.setItem('token', response.data.data.token);
				// return response.data;
			} else {
				alert('eror');
			}
		})
		.catch((err) => {
			alert('Please Login');
		});
};
