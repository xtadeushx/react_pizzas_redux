
import language from './slices/languageSlice'

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        language,
    }
})