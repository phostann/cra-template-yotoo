import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createReducer } from './reducer';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [sagaMiddleware];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  return configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(middlewares),
    enhancers,
  });
}
