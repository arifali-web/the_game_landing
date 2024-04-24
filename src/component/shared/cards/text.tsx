import { Button } from 'antd'
import React from 'react'

interface TextProps {
    heading: string
    subHeading: string
    buttontext: string
}

function TextComp( { heading, subHeading, buttontext }: TextProps ) {
    return (
        <div>
            <p className='heading bachelorette'>{heading}</p>
            <p className='sub-heading rebond-regular'>{subHeading}</p>
            <Button className='land-button d-inline-flex align-items-center px-5'>{buttontext}</Button>
        </div>
    )
}

export default TextComp
