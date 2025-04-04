import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notificationsEnabled: true,
    musicVolume: 0.5,
    soundVolume: 0.5,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleNotifications: (state) => {
            state.notificationsEnabled = !state.notificationsEnabled;
        },
        setMusicVolume: (state, action) => {
            state.musicVolume = action.payload;
        },
        setSoundVolume: (state, action) => {
            state.soundVolume = action.payload;
        },
    },
});

export const { toggleNotifications, setMusicVolume, setSoundVolume } = settingsSlice.actions;

export default settingsSlice.reducer;
