"use client";
import React, { FC, useEffect, useRef, useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { FiSearch } from 'react-icons/fi'
import cn from 'classnames'
import { Coords } from 'google-map-react'

interface IInputPlaces {
	cbSuccess: (address:string, location:Coords) => void;
	type: 'from' | 'to';
}

const InputPlaces:FC<IInputPlaces> = ({ cbSuccess, type }) => {
	const isFrom = type === 'from'
	const inputRef = useRef<HTMLInputElement>(null)

	const [address, setAddress] = useState('');

	const setFocus = () => inputRef?.current?.focus()
	const handleSelect = (address: string) => {
		geocodeByAddress(address).then(results => getLatLng(results[0])).then(location => {
			cbSuccess(address, location)
			setAddress(address)
		}).catch(err => console.log("error", err)
		)
	}

	useEffect(() => {
		if(isFrom) setFocus()
	}, [isFrom])


	return (
		<PlacesAutocomplete 
			value={address} 
			onChange={setAddress} 
			onSelect={handleSelect} 
			onError={err => console.log('error', err)}
		>
		{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
			<div className={cn('shadow-lg', {
				'mb-5': isFrom
			})}>
				<div className='py-4 px-5 bg-white rounded-lg flex items-center' style={
					suggestions.length ? {
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0,
					} : {}
				}
				onClick={setFocus}
				>
					<FiSearch color={isFrom ? '#ffbc00' : '#615F5D'} className='mr-3' size={26} />
					<input 
					{...getInputProps({
						ref: inputRef,
						placeholder: isFrom ? 'Where from?' : 'Where to?',
						className: 'outline-none w-full text-green-800'
					})} />
					{ !isFrom && (
							<div className='absolute right-5 text-sm text-gray-400'>- min.</div>
						)}
				</div>

				<div className={cn('absolute w-full h-0 overflow-y-auto rounded-b-lg z-10', {
					'h-48': suggestions.length || loading
				})}>
					{loading && <div className='p-2 bg-white'>Loading...</div>}
					{
						suggestions.map((suggestion, index) => (
							<div
								{...getSuggestionItemProps(suggestion, {
									className: cn('cursor-pointer p-3 text-black', {
										'bg-gray-100': suggestion.active,
										'bg-white ': !suggestion.active,
									})
								})}
									key={index}
								>
									<span>{suggestion.description}</span>
							</div>
						))
					}
				</div>
			</div>
		)}
		</PlacesAutocomplete>
	)
}

export default InputPlaces
