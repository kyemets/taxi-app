"use client"
import GoogleMapReact from 'google-map-react'


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
			options={{}}
		/>
	</div>
  )
}

export default Map
