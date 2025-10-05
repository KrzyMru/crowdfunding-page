import { createSlice } from '@reduxjs/toolkit';
import type { CountState } from './types';
import type { RootState } from '../store';

const initialState: CountState = {
    value: 5007,
}

export const backersSlice = createSlice({
    name: 'backers',
    initialState,
    reducers: {
        incrementBackers: (state) => {
            state.value = state.value + 1;
        },
    },
});

export const { incrementBackers } = backersSlice.actions;

export const backersSelector = (state: RootState) => state.backers.value;

export default backersSlice.reducer;