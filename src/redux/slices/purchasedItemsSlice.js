import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    purchasedItems: [], // Список купленных предметов (ID)
};

const purchasedItemsSlice = createSlice({
    name: 'purchasedItems',
    initialState,
    reducers: {
        buyItem: (state, action) => {
            if (!state.purchasedItems.includes(action.payload)) {
                state.purchasedItems.push(action.payload);
            }
        },
        resetItems: (state) => {
            state.purchasedItems = [];
        }
    }
});

export const { buyItem, resetItems } = purchasedItemsSlice.actions;
export default purchasedItemsSlice.reducer;
