import * as actionTypes from "./actions/actions";

const initialState = {
	categories: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_HEADER_MENU:
			return {
				...state,
				categories: {}
			};

		default:
			return state;
	}
};

export default reducer;
