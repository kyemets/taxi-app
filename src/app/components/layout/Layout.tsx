"use client"
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import FavIcon from '../../assets/images/preloader.gif'
import Script from 'next/script'
import Loader from '../ui/Loader'
import React from 'react'

interface ILayout {
	title: string; 
	children: any;
}


const Layout: FC<ILayout> = ({ children, title }) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		// add preloader
		//setIsLoading(true)

		const timeout = setTimeout(() => {setIsLoading(false)}, 4000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<div>
			<Head>
				<title>{title} | Taxi App</title>
				<meta name="description" content="Taxi App" />
				<link rel="shortcut icon" href={FavIcon.src} type='image/png' />
				<meta name='theme-color' content='#ffbc00' />
			</Head>

			<Script 
				strategy='beforeInteractive'
				src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
			/>

			<div style={{ maxWidth: 480 }} className='mx-auto relative overflow-hidden'>
				{isLoading ? <Loader /> : children}
			</div>
		</div>
	)
}

export default Layout
