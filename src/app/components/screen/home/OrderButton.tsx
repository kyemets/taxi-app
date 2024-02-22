"use client"
import React from 'react'
import Button from '../../ui/Button'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import { optionsList } from './data'

const OrderButton = () => {

	const {travelTime, selectedOption} = useTypedSelector(state => state.taxi);

	const orderHandler = () => {
		alert(`You ordered ${
			optionsList.find(option => option._id === selectedOption)?.title
		}!`)
	}

  return (
	<Button 
		title='Order'
		bgColor='#ffe847'
		color='#111'
		cb={orderHandler}
		isDisabled={!travelTime && !selectedOption}
	/>
  )
}

export default OrderButton
