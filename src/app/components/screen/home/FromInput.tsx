"use client"
import React from 'react'
import InputPlaces from '../../ui/InputPlaces'
import { Coords } from 'google-map-react'

const FromInput = () => {

	const cbSuccess = (address:string, location:Coords) => {
		console.log('Success');
	}

  return (
	<InputPlaces 
		cbSuccess={cbSuccess} 
		type="from" 
	/>
  )
}

export default FromInput
