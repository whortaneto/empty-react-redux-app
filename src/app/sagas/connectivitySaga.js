import { delay } from 'redux-saga';
import { call, put, select, race, takeEvery } from 'redux-saga/effects';
import api from '../api';
import modules from '../modules';


// worker Saga: will be fired on API_CALL_REQUESTED connectivity.actions
function* callApi(callName, args, timeoutMS) {
  try {
    const winner = yield race({
      requestResult: call(api.apiCalls[callName], args),
      requestTimeout: call(delay, timeoutMS)
    });
    if (winner.requestTimeout) {
      const error = new Error('Request timeout');
      error.connectivityError = true;
      return { error };
    }
    return { data: winner.requestResult };
  } catch (error) {
    return { error };
  }
}

function* startApiCall(action) {
  const server = (yield select(modules.settings.selectors.getServer)).replace(/\/+$/, '');
  const { callName, timeoutMS } = action.payload;
  const args = { server, ...action.payload.args };
  yield put(modules.connectivity.actions.announceApiCall(action.payload.actions.REQUESTED, args));
  const { data, error } = yield* callApi(callName, args, timeoutMS);
  if (error) {
    yield put(modules.connectivity.actions.failApiCall(action.payload.actions.FAILED, args, error));
  } else {
    yield put(modules.connectivity.actions.fulfillApiCall(action.payload.actions.SUCCEEDED, args, data));
  }
}

/*
 Starts startApiCall on each dispatched `API_CALL_REQUESTED` action.
 */
function* watchCallRequests() {
  yield takeEvery(modules.connectivity.actions.API_CALL_REQUESTED, startApiCall);
}


// single entry point to start all Sagas at once
function* connectivitySaga() {
  yield [
    watchCallRequests()
  ];
}

export default connectivitySaga;
