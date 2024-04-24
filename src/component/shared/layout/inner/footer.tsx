'use client'
import React, { useEffect, useState } from 'react'
import FooterLinks from './footerLinks'
import homelinks from '@/config/landingpageData/homeLinks'
import Aboutuslinks from '@/config/landingpageData/AboutUsLinks'
// import bloglinks from '@/config/landingpage-data/bloglinks'
import bloglinks from '@/config/landingpageData/blogLinks'
import Sociallinks from '@/component/partials/footer/socialLink'
import Image from 'next/image'
import Navlink from './navLinks'


function Footer() {
    const [innerWidth, setInnerWidth] = useState(undefined as any)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])
    return (
        <div className='row p-5 footer'>
            <div className='col-lg-6 col-12'>
                {
                    innerWidth > 999 ? <div className='d-flex justify-content-between'>
                        <FooterLinks title='Home' links={homelinks} />
                        <FooterLinks title='About us' links={Aboutuslinks} />
                        <FooterLinks title='Investor Relations' links={[]} />
                        <FooterLinks title='Blog: The Game Method' links={bloglinks} />
                    </div>
                        :
                        <Navlink />
                }
            </div>


            <div className='col-lg-6 col-12 d-flex align-items-lg-start align-items-center py-4 py-lg-0 justify-content-lg-end flex-column flex-lg-row  gap-5'>
                <Sociallinks />
                <div className='d-flex flex-column gap-3'>
                    <Image src={'/landingpage-images/applelink.svg'} alt='' height={54} width={195} />
                    <Image src={'/landingpage-images/playstore.svg'} alt='' height={54} width={195} />
                </div>
            </div>
        </div>
    )
}

export default Footer
