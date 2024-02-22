import { createSlice } from '@reduxjs/toolkit'
import { TypeForm, TypeInitialState } from './types'

const initialState: TypeInitialState = {
	from: {} as TypeForm, 
	to: {} as TypeForm,
	travelTime: 0,
	selectedOption: ''
}


export const taxiSlice = createSlice({
	name: 'taxi',
	initialState,
	reducers: {
		setFrom: (state, action) => {
			state.from = action.payload
		},
		setTo: (state, action) => {
			state.to = action.payload
		},
		setTravelTime: (state, action) => {
			state.travelTime = action.payload
		},
		setSelectedOption: (state, action) => {
			state.selectedOption = action.payload
		}
	}
})
