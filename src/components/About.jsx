import React from 'react'
import CommonLayout from './CommonLayout'
import web from '../images/office.jpeg'

function About() {
    return (
        <div>
            <CommonLayout title="Welcome to About Page" image={web} visit="/contact" desc="Hi everyone, Hope you all are good! I am Ashish Kumar. Thanks for visiting my website" button="Contact Now"/>
        </div>
    )
}

export default About
