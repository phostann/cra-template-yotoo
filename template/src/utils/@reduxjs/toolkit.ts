import { createSlice as CreateSliceOriginal, SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit';
import { RootStateKeyType } from '../types/injector-typings';

export const createSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends RootStateKeyType>(options: CreateSliceOptions<State, CaseReducers, Name>) => CreateSliceOriginal(options);
