import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedBackgroundId: 1, // по умолчанию, например, фон с ID 1
};

const selectedBackgroundSlice = createSlice({
    name: 'selectedBackground',
    initialState,
    reducers: {
        selectBackground: (state, action) => {
            state.selectedBackgroundId = action.payload;
        },
        resetBackground: (state) => {
            state.selectedBackgroundId = 1;
        },
    },
});

export const { selectBackground, resetBackground } = selectedBackgroundSlice.actions;
export default selectedBackgroundSlice.reducer;
