import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountState } from './types';
import type { RootState } from '../store';

const initialState: CountState = {
    value: 89914,
}

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        incrementCashByAmount: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
    },
});

export const { incrementCashByAmount } = cashSlice.actions;

export const cashSelector = (state: RootState) => state.cash.value;

export default cashSlice.reducer;