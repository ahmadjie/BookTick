import { GET_EVENTS } from '../config/constants';
import axios from 'axios';

export const getEvents = () => {
	return {
		type: GET_EVENTS,
		payload: axios({
			method: 'GET',
			url: 'http://localhost:7000/api/v1/events'
		})
	};
};

