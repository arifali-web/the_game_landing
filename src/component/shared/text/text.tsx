'use client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

interface TextProps {
    heading: string
    subHeading: string
    buttontext: string
}

function TextComp( { heading, subHeading, buttontext }: TextProps ) {
    const router = useRouter()
    return (
        <div>
            <h2 className='heading bachelorette'>{heading}</h2>
            <p className='sub-heading rebond-regular'>{subHeading}</p>
            <Button onClick={()=> router.push('/waiting-list')} className='land-button d-inline-flex align-items-center px-5'>{buttontext}</Button>
        </div>
    )
}

export default TextComp
