import {createSlice} from "@reduxjs/toolkit";

export type ThemeMode = 'light' | 'dark';

const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    return savedTheme || 'light';
};

const initialTheme = getInitialTheme();
document.documentElement.setAttribute('data-theme', initialTheme);

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        themeMode: initialTheme,
    },
    selectors: {
        selectThemeMode: state => state.themeMode,
    },
    reducers: create => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode;
        }),
    }),
})

export const { changeThemeModeAC } = appSlice.actions
export const appReducer = appSlice.reducer
export const { selectThemeMode } = appSlice.selectors