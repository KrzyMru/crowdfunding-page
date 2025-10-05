import { configureStore } from '@reduxjs/toolkit';
import cashReducer from './slices/cashSlice';
import backersReducer from './slices/backersSlice';
import amountStandardReducer from './slices/amountStandardSlice';
import amountBlackReducer from './slices/amountBlackSlice';
import amountMahoganyReducer from './slices/amountMahoganySlice';
import backProjectOptionReducer from './slices/backProjectOptionSlice';

const store = configureStore({
    reducer: {
        cash: cashReducer,
        backers: backersReducer,
        amountStandard: amountStandardReducer,
        amountBlack: amountBlackReducer,
        amountMahogany: amountMahoganyReducer,
        backProjectOption: backProjectOptionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;