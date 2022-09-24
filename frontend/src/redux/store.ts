import { configureStore } from '@reduxjs/toolkit'
import optionReducer from './sortOptionReducer'

export const store = configureStore({
    reducer: {
        sortOptionReducer: optionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch