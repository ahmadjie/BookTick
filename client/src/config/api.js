import axios from 'axios';

export const login = (user) => {
	return axios
		.post('http://localhost:7000/api/v1/login', {
			username: user.username,
			password: user.password
		})
		.then((response) => {
			console.log(response);
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
			password: user.password
		})
		.then((response) => {
			if (response.data.data.message === 'success') {
				localStorage.setItem('token', response.data.data.token);
				return response.data;
			} else {
				alert('eror');
			}
		})
		.catch((err) => {
			console.log(err);
		});
};
