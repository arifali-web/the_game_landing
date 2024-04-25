'use client'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()

  return (
    <LandingpageLayout >
      <div>
        <h2 className='rebond-bold text-center text-white'>Cookies Policy</h2>
        <h5 className='rebond-bold text-center text-white py-5'>Our site uses cookies. Please refer to our Privacy Policy and Terms of Use for complete information about the use of cookies.</h5>
        <div className='d-flex justify-content-center justify-content-around py-5'>
        <Button onClick={()=> router.push('/privacy-policy')}  className='cookies-button d-flex align-items-center px-5'>Privacy Policy</Button>

        <Button onClick={()=> router.push('/terms-and-conditions')} className='cookies-button d-flex align-items-center px-5'>Terms of Use</Button>
        </div>
      </div>
    </LandingpageLayout>
  )
}

export default page
