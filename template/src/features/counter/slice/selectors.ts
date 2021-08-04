import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types';
import { initialState } from './index';

const selectDomain = (state: RootState) => state.counter || initialState;

export const selectValue = createSelector(
  [selectDomain],
  (counterState) => counterState.value,
);
