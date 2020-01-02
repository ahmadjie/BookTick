import { POST_FAVORITE } from '../config/constants';

const initialUserAddFavorite = {
	data: [],
	isLoadingLike: false,
	errorLike: false
};

export const userSetFavoriteEvent = (state = initialUserAddFavorite, action) => {
	switch (action.type) {
		case `${POST_FAVORITE}_PENDING`:
			return {
				...state,
				isLoadingLike: true
			};
		case `${POST_FAVORITE}_FULFILLED`:
			return {
				...state,
				dataLike: action.payload.data,
				isLoadingLike: false
			};
		case `${POST_FAVORITE}_REJECTED`:
			return {
				...state,
				errorLike: true,
				isLoadingLike: false
			};
		default:
			return state;
	}
};
// const initialState = {
// 	data: [],
// 	isLoading: false,
// 	error: false
// };

// export const user = (state = initialState, action) => {
// 	switch (action.type) {
// 		case `${GET_PROFILE}_PENDING`:
// 			return {
// 				...state,
// 				isLoading: true
// 			};
// 		case `${GET_PROFILE}_FULFILLED`:
// 			return {
// 				...state,
// 				data: action.payload,
// 				isLoading: false
// 			};
// 		case `${GET_PROFILE}_REJECTED`:
// 			return {
// 				...state,
// 				error: true,
// 				isLoading: false
// 			};
// 		default:
// 			return state;
// 	}
// };
