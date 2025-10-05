import { createSlice } from '@reduxjs/toolkit';
import type { CountState } from './types';
import type { RootState } from '../store';

const initialState: CountState = {
    value: 64,
}

export const amountBlackSlice = createSlice({
    name: 'amountBlack',
    initialState,
    reducers: {
        decrementAmountBlack: (state) => {
            if(state.value > 0)
                state.value = state.value - 1;
        },
    },
});

export const { decrementAmountBlack } = amountBlackSlice.actions;

export const amountBlackSelector = (state: RootState) => state.amountBlack.value;

export default amountBlackSlice.reducer;