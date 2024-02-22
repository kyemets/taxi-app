'use client'
import React from 'react'
import InputPlaces from '../../ui/InputPlaces'
import { Coords } from 'google-map-react'
import { useActions } from '@/app/hooks/useActions'

const ToInput = () => {
    const { setTo } = useActions()

    const cbSuccess = (address: string, location: Coords) => {
        setTo({ location, description: address })
    }

    return <InputPlaces cbSuccess={cbSuccess} type="to" />
}

export default ToInput
