import { delay, put, takeLatest } from 'redux-saga/effects';
import { CounterActions } from './index';

export function* incrementAsync() {
  // execute async task then update the store
  yield delay(1000);
  yield put(CounterActions.increment());
}

export function* counterRootSaga() {
  yield takeLatest(CounterActions.incrementAsync.type, incrementAsync);
}
