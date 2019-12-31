import { GET_PROFILE } from '../config/constants';
const initialState = {
	data: [],
	isLoading: false,
	error: false
};

export const user = (state = initialState, action) => {
	switch (action.type) {
		case `${GET_PROFILE}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_PROFILE}_FULFILLED`:
			return {
				...state,
				data: action.payload,
				isLoading: false
			};
		case `${GET_PROFILE}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		default:
			return state;
	}
};
