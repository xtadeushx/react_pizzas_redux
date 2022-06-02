
import language from './slices/languageSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import { logger } from 'redux-logger';
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        language,
        filter,
        cart,
    },
    middleware: [logger],
})