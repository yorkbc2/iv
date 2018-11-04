import {
	FETCH_MEDICINE_START,
	FETCH_MEDICINE_END,
	FETCH_MEDICINE_ERROR
} from "./../actions/medicineActions";

export function medicineReducer (state={
	fetching: false,
	diagnoses: [],
	alergics: []
}, {type, payload}) {
	switch (type) {

		case FETCH_MEDICINE_START:
			return Object.assign({}, state, {fetching: true});
		case FETCH_MEDICINE_END:
			return Object.assign({}, state, {fetching: false}, payload);
		case FETCH_MEDICINE_START:
			return Object.assign({}, state, {fetching: false, error: payload});
		default:
			return state;
	}
}