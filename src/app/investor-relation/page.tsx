"use client"
import TextComp from '@/component/shared/cards/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import { Button, Form, Input } from 'antd'
import Image from 'next/image'
import React from 'react'


function page() {
    return (
        <LandingpageLayout>
            <div className=' text-center investor-layout'>

                <div className='py-5'>
                    <TextComp
                        heading='Investor Relation'
                        subHeading='Interested in building the future of dating education with us? Let’s chat!'
                        buttontext=''
                    />
                </div>



                <div className='form'>


                    <div className='d-flex align-items-center'>
                        <label className='label text-white'>Name<span>*</span></label>
                        <Image src={'/icons/input-arrow.svg'} alt='' width={38.78} height={23.44} />
                    </div>
                    <Input className='mt-1 mb-4 regular' placeholder='Name' />



                    <div className='d-flex align-items-center'>
                        <label className='label text-white'>Email<span>*</span></label>
                        <Image src={'/icons/input-arrow.svg'} alt='' width={38.78} height={23.44} />
                    </div>
                    <Input className='mt-1 mb-4 regular' placeholder='Mail@gmail.com' />

                    <div className='d-flex align-items-center'>
                        <label className='label text-white'>Phone<span>*</span></label>
                        <Image src={'/icons/input-arrow.svg'} alt='' width={38.78} height={23.44} />
                    </div>
                    <Input className='mt-1 mb-4 regular' placeholder='050 123 4567' />

                    <div className='d-flex align-items-center'>
                        <label className='label text-white'>Organization<span>*</span></label>
                        <Image src={'/icons/input-arrow.svg'} alt='' width={38.78} height={23.44} />
                    </div>
                    <Input className='mt-1 mb-4 regular' placeholder='' />

                    <Button className=' land-button d-flex align-items-center px-5'>Submit</Button>
                </div>
            </div>

        </LandingpageLayout >
    )
}

export default page
