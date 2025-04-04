import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    levels: Array(10).fill(false) // Все уровни закрыты
};

// Первый уровень открыт
initialState.levels[0] = true;

const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        completeLevel: (state, action) => {
            const levelIndex = action.payload;
            if (levelIndex >= 0 && levelIndex < state.levels.length) {
                state.levels[levelIndex] = true; // Отмечаем уровень как пройденный
                if (levelIndex + 1 < state.levels.length) {
                    state.levels[levelIndex + 1] = true; // Открываем следующий уровень
                }
            }
        },
        resetLevels: (state) => {
            state.levels = Array(10).fill(false);
            state.levels[0] = true; // Первый уровень всегда открыт
        }
    }
});

export const { completeLevel, resetLevels } = levelsSlice.actions;
export default levelsSlice.reducer;
