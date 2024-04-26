import LatestCard from '@/component/partials/latest/card'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import React from 'react'

function page() {
    return (
        <LandingpageLayout>
            <div className='container latest-card'>
                <div className='col-12 p-lg-5 p-0 py-5'>
                    <div className='d-flex text-center align-items-center justify-content-center' style={{ height: '500px' ,backgroundColor: '#fff', }}>
                        <h2 className='manrope-bold' style={{ color: '#000' , fontSize: '60px' ,textTransform: 'uppercase' ,fontWeight: '700' }}>
                            What makes a <br />relationship <br />feasible in the <br /> long term?
                        </h2>
                    </div>
                    <div className='row py-2'>
                        <h4 className='col-7 text-white rebond-regular'>What makes a relationship feasible in the long term?</h4>
                        <small className='col-5 text-end text-white rebond-light'>
                            <span>The Game App</span>
                        </small>
                    </div>
                    <div className='row'>
                        <small className='col-8 text-white rebond-light'>The Game App team</small>
                        <small className='col-4 text-end text-white rebond-light'>11.01.2024</small>
                    </div>
                </div>

                <LatestCard />
            </div>
        </LandingpageLayout>
    )
}

export default page