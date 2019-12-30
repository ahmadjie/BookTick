import { GET_EVENTS } from '../config/constants';
const initialState = {
	data: [],
	isLoading: false,
	error: false
};

export const events = (state = initialState, action) => {
	switch (action.type) {
		case `${GET_EVENTS}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_EVENTS}_FULFILLED`:
			return {
				...state,
				data: action.payload.data,
				isLoading: false
			};
		case `${GET_EVENTS}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		default:
			return state;
	}
};

// const initialStateId = {
// 	event: [],
// 	isLoading: false,
// 	error: false
// };

// export const eventId = (state = initialStateId, action) => {
// 	switch (action.type) {
// 		case `${GET_EVENT_ID}_PENDING`:
// 			return {
// 				...state,
// 				isLoading: true
// 			};
// 		case `${GET_EVENT_ID}_FULFILLED`:
// 			return {
// 				...state,
// 				event: action.payload.data,
// 				isLoading: false
// 			};
// 		case `${GET_EVENT_ID}_REJECTED`:
// 			return {
// 				...state,
// 				error: true,
// 				isLoading: false
// 			};
// 		default:
// 			return state;
// 	}
// };
