import Layout from '../../layout/Layout'
import Map from '../../../components/screen/home/Map'
import React from 'react'
import FromInput from './FromInput'
import ToInput from './ToInput'
import Options from './Options'
import OrderButton from './OrderButton'

const Home = () => {
    return (
        <Layout title="Order taxi">
            <Map />

            <div className="absolute z-10 left-5 w-11/12 bottom-10">
                <FromInput />
                <ToInput />
                <Options />
                <OrderButton />
            </div>
        </Layout>
    )
}

export default Home
