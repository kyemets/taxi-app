import GoogleMapReact from 'google-map-react'


const Map = () => {
  return (
	<div className='h-screen w-full'>
		<GoogleMapReact
			bootstrapURLKeys={{ key: String(process.env.REACT_APP_MAP_KEY) || ''}}
		/>
	</div>
  )
}

export default Map
