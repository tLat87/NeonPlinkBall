import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import balanceReducer from './slices/money';
import purchasedItemsReducer from './slices/purchasedItemsSlice';
import levelsReducer from './slices/levelsSlice';
import selectedBackgroundReducer from './slices/selectedBackgroundSlice';
import settingsReducer from './slices/settingsSlice';

const rootReducer = combineReducers({
  balance: balanceReducer,
  purchasedItems: purchasedItemsReducer,
  levels: levelsReducer,
  selectedBackground: selectedBackgroundReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
