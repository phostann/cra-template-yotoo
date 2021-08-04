import { CounterState } from './counterState';
import { createSlice } from '../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../utils/redux-injectors';
import { counterRootSaga } from './saga';

export const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementAsync: () => {
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: CounterActions } = slice;

export const useCounterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: counterRootSaga });
  return { actions: slice.actions };
};
