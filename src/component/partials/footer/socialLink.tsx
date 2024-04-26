import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sociallinks() {
    return (
        <div className=''>
            <p className='text-white social'>Social Links</p>
            <div className='d-flex gap-2'>
                <Link href={'/'}><Image src={'/icons/insta-icon.svg'} width={25} height={25} alt={''} ></Image> </Link>
                <Link href={'/'}><Image src={'/icons/tiktok.svg'} width={25} height={25} alt={''} ></Image> </Link>
                {/* <Link href={'/'}><Image src={'/icons/facebook-icon2.svg'} width={25} height={25} alt={''} ></Image> </Link>
                <Link href={'/'}><Image src={'/icons/youtube.svg'} width={25} height={25} alt={''} ></Image> </Link> */}
            </div>
        </div>
    )
}

export default Sociallinks
