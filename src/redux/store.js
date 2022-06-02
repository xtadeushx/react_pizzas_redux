
import language from './slices/languageSlice';
import filter from './slices/filterSlice';
import { logger } from 'redux-logger';
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        language,
        filter,
    },
    middleware: [logger],
})