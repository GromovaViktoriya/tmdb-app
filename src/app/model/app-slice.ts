import {createSlice} from "@reduxjs/toolkit";

export type ThemeMode = 'light' | 'dark';
export type LanguageMode = 'en-US' | 'ru-RU';

const getInitialTheme = (): ThemeMode => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    return savedTheme || 'light';
};

const getInitialLanguage = (): LanguageMode => {
    const savedLanguage = localStorage.getItem('language') as LanguageMode | null;
    return savedLanguage || 'ru-RU';
};

const initialTheme = getInitialTheme();
const initialLanguage = getInitialLanguage();
document.documentElement.setAttribute('data-theme', initialTheme);

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        themeMode: initialTheme,
        language: initialLanguage,
    },
    selectors: {
        selectThemeMode: state => state.themeMode,
        selectLanguage: state => state.language
    },
    reducers: create => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode;
        }),
        changeLanguageAC: create.reducer<{ language: LanguageMode }>((state, action) => {
            state.language = action.payload.language;
        }),
    }),
})

export const { changeThemeModeAC, changeLanguageAC } = appSlice.actions
export const appReducer = appSlice.reducer
export const { selectThemeMode, selectLanguage } = appSlice.selectors