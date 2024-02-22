"use client"
import { useTypedSelector } from '@/app/hooks/useTypedSelector'
import GoogleMapReact from 'google-map-react'
import React from 'react'


const Map = () => {

	const {from} = useTypedSelector(state => state.taxi);

  return (
	<div className='h-screen w-full'>
		<GoogleMapReact
			bootstrapURLKeys={{ key: String(process.env.REACT_APP_MAP_KEY) || ''}}
			defaultCenter={{
				lat: 50.1109221,
				lng: 8.6821267
			}}
			defaultZoom={ 13 }
			options={{
				zoomControl: false,
				fullscreenControl: false,
				keyboardShortcuts: false,
				clickableIcons: false,
				scrollwheel: false
			}}
			center={
				from.location?.lat 
					? {
						lat: from.location.lat,
						lng: from.location.lng}
					: undefined}
		/>
	</div>
  )
}

export default Map
