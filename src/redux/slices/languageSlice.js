const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isUkraine: true,
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        handelChangeLanguage: (state) => {
            state.isUkraine = !state.isUkraine;
        }
    }
})


export const { handelChangeLanguage } = languageSlice.actions;

export default languageSlice.reducer;