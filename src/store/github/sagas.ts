import { takeEvery } from "@redux-saga/core/effects";
import { GET_USER_PROFILE_REQUEST } from './actions';

function* sampleSaga() {
	
}

export function* githubSaga() {
	yield takeEvery(GET_USER_PROFILE_REQUEST, sampleSaga);
}