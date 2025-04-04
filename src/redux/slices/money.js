import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 0,
};

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addBalance: (state, action) => {
            state.balance += action.payload;
        },
        subtractBalance: (state, action) => {
            state.balance = Math.max(0, state.balance - action.payload);
        },
        setBalance: (state, action) => {
            state.balance = action.payload;
        }
    }
});

export const { addBalance, subtractBalance, setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
