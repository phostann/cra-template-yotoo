import { CounterState } from '../features/counter/slice/counterState';

export interface RootState {
    counter?: CounterState
}
