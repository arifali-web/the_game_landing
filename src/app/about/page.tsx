
import AboutCard from '@/component/partials/about/Card'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import { Button } from 'antd'
import React from 'react'

function About() {
  return (
    <LandingpageLayout>
      <h2 className='heading bachelorette text-center py-5'>Meet our founding team</h2>
      <AboutCard />
      <div className='d-flex justify-content-center'>
        <Button className='land-button d-flex align-items-center my-5 px-5' href='/explore'>
          Read Maria’s full story
        </Button>
      </div>
    </LandingpageLayout>
  )
}

export default About
