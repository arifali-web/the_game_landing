'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { UnorderedListOutlined } from '@ant-design/icons'
import MobileNavbar from './mobileNavbar'
import Navlink from './navLinks'




function NavBar() {

    const [open, setOpen] = useState(false)

    const [innerWidth, setInnerWidth] = useState(undefined as any)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])
    return (
        <div className='d-flex justify-content-between align-items-center p-lg-5 p-3'>
            <Image
                src={'/landingpage-images/logo.svg'}
                alt=''
                height={56.2}
                width={167}
            />
            {
                innerWidth > 999 ?
                    <Navlink /> : <MobileNavbar open={open} setOpen={setOpen} />
            }
            {/* <Navlink /> */}
            {
                innerWidth <= 999 &&
                <>
                    <button onClick={() => setOpen(true)} className='border-0 hamburger d-flex justify-content-center align-items-center bg-white rounded-circle'>
                        <UnorderedListOutlined style={{ color: '#b52929', fontSize: 18 }} />
                    </button>

                </>
            }
        </div>
    )
}

export default NavBar
