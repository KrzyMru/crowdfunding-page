import { createSlice } from '@reduxjs/toolkit';
import type { CountState } from './types';
import type { RootState } from '../store';

const initialState: CountState = {
    value: 101,
}

export const amountStandardSlice = createSlice({
    name: 'amountStandard',
    initialState,
    reducers: {
        decrementAmountStandard: (state) => {
            if(state.value > 0)
                state.value = state.value - 1;
        },
    },
});

export const { decrementAmountStandard } = amountStandardSlice.actions;

export const amountStandardSelector = (state: RootState) => state.amountStandard.value;

export default amountStandardSlice.reducer;