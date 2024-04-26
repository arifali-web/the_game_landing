'use client'
import Image from 'next/image'
import React from 'react';


interface TextProps {
    heading: React.ReactNode;
    subHeading: string
    text: string
    number: number
    src: string
}

function BlogText({ heading, subHeading, text, number , src }: TextProps) {

    return (
        <div className='inner-text pt-5'>
            <div className='d-flex gap-lg-5 gap-2 text-box align-items-center'>
                <p className='number-text'>{number}</p>
                <div className='heading-text' >
                    <h2 className='heading'>{heading}</h2>
                    <div className='d-flex gap-2 arrow'>
                        <h3 className='sub-heading'>{subHeading}</h3>
                        <Image className='icon' src={src} width={53.34} height={35.25} alt={''} />
                    </div>
                </div>
            </div>
            <p className='p-text'>{text}</p>
        </div>
    )
}

export default BlogText
