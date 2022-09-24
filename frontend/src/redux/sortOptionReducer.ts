import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface optionTypeState {
    option: string
}

const initialState: optionTypeState = {
    option: 'marketCap'
}

export const optionSlice = createSlice({
    name: "sortOption",
    initialState,
    reducers: {
        setSortOption: (state, action) => {
            state.option = action.payload
        }
    }
})

export const { setSortOption } = optionSlice.actions
export const selectUser = (a: RootState) => a
export default optionSlice.reducer