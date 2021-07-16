import React from 'react'
import CommonLayout from './CommonLayout'
import web from '../images/dev.jpeg'

function Home() {
    return (
        <div>
            <CommonLayout title="Grow your business with " image={web} visit="/services" desc="We are the team of talented developer making websites" button="Get Started"/>
        </div>
    )
}

export default Home
