import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { taxiSlice } from '../store/slice'

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(taxiSlice.actions, dispatch)
}
