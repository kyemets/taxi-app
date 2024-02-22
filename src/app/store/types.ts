import { Coords } from 'google-map-react'

export type TypeForm = {
	location: Coords
	descriptions: string
}

export type TypeInitialState = {
	from: TypeForm,
	to: TypeForm,
	travelTime: number,
	selectedOption: string
}
