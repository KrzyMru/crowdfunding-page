import { createSlice } from '@reduxjs/toolkit';
import type { CountState } from './types';
import type { RootState } from '../store';

const initialState: CountState = {
    value: 0,
}

export const amountMahoganySlice = createSlice({
    name: 'amountMahogany',
    initialState,
    reducers: {
        decrementAmountMahogany: (state) => {
            if(state.value > 0)
                state.value = state.value - 1;
        },
    },
});

export const { decrementAmountMahogany } = amountMahoganySlice.actions;

export const amountMahoganySelector = (state: RootState) => state.amountMahogany.value;

export default amountMahoganySlice.reducer;