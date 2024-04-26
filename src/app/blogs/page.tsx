'use client'
import Blog from '@/component/shared/cards/blogcard'
import Blogcard from '@/component/shared/cards/blogcard'
import TextComp from '@/component/shared/text/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import { Button } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'

function Blogs() {
    const router = useRouter()
    return (
        <LandingpageLayout>
            <div className='blogs-layout px-lg-5'>
                <div className='blogs-bg flex-column text-center d-flex gap-5 justify-content-center'>
                    <TextComp
                        heading='Learn to date and love better'
                        subHeading=''
                        buttontext='Step Into The Game'
                    />

                    <h2 className='heading pt-5'>The Fundamentals</h2>
                    <h3 className='sub-heading'>HELPING PEOPLE FIND LOVE AND MANAGE RELATIONSHIPS. <br />
                        Our vision is to be world’s leading platform for consciously playful dating, making the world a better <br /> place by contributing to the overall mental health of men and women who use The Game.
                    </h3>

                </div>
                <div className='bg'>
                    <Blog />
                    <div className='d-flex justify-content-center py-5'>

                        <Button onClick={() => router.push('/blogs/latest')} className='land-button d-flex align-items-center px-5'>Latest</Button>
                    </div>
                </div>
            </div>
        </LandingpageLayout>
    )
}

export default Blogs
