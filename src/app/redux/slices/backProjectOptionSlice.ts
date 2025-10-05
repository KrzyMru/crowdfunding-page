import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BackProjectOptions, BackProjectOptionState } from './types';
import type { RootState } from '../store';

const initialState: BackProjectOptionState = {
    value: null,
}

export const backProjectOptionSlice = createSlice({
    name: 'backProjectOption',
    initialState,
    reducers: {
        changeBackProjectOption: (state, action: PayloadAction<BackProjectOptions>) => {
            state.value = action.payload;
        },
    },
});

export const { changeBackProjectOption } = backProjectOptionSlice.actions;

export const backProjectOptionSelector = (state: RootState) => state.backProjectOption.value;

export default backProjectOptionSlice.reducer;