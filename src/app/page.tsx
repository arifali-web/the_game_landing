import TextComp from '@/component/shared/text/text';
import LandingpageLayout from '@/component/shared/layout/landingpage'
import { Button } from 'antd'
import Image from 'next/image';
import React from 'react'

function home() {
    return (
        <LandingpageLayout >
            <div className='home  d-flex text-center justify-content-center align-items-center flex-column'>
                <TextComp
                    heading='Welcome'
                    subHeading='to the First Love & Relationship management platform'
                    buttontext='Step Into The Game'
                />
            </div>
            <div className='row'>
                <div className="col-lg-6 col-12 d-flex justify-content-lg-end">
                    <p className=' text-white learn-text rebond-medium'>Learn to date better. <br />
                        The only app you need <br />
                        to find and keep love.</p>
                </div>
            </div>
            <div className='row'>
                <div className="col-6">
                </div>
                <div className="col-lg-6 col-12">
                    <div className='d-flex justify-content-lg-start justify-content-end py-2'>

                        <Image src={'/landingpage-images/arrowdown-home.svg'} width={300} height={300} alt={''} />
                    </div>
                    <p className='text-start p-txt rebond-light '>Dating is the game where everyone wins. <br />
                        But if you don’t play, your chance is 0%. <br />
                        It’s up to you!</p>

                    <Button className='land-button d-flex align-items-center px-5'>How do I start?</Button>
                </div>
            </div>
        </LandingpageLayout>
    )
}

export default home;
