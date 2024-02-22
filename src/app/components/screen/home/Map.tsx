"use client"
import GoogleMapReact from 'google-map-react'
import React from 'react'


const Map = () => {
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
		/>
	</div>
  )
}

export default Map
