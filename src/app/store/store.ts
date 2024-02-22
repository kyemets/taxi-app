import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { taxiSlice } from './slice';

const rootReducer = combineReducers({
	taxi: taxiSlice.reducer
})


export const store = configureStore({
	reducer: rootReducer
})

export type TypeRootStore = ReturnType<typeof rootReducer>
