import TextComp from '@/component/shared/cards/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <LandingpageLayout>
            <div className='inner-blog '>
                <div className='blog1 text-center d-flex align-items-center'>
                    <TextComp heading='The Game Rules'
                        subHeading='Now this is serious business – The Game Rules are tried and true principles that, if respected, will enable you to find and keep love. P.S. no need to print them out and stick on your fridge – The Game App will help and encourage dating by the Rules ;)'
                        buttontext='Step Into The Game'
                    />
                </div>
                <div className='row px-lg-5 px-2'>
                    <div className="col-lg-6 col-12">
                        <div className='d-lg-flex gap-5 align-items-center'>
                            <p className='number-text'>1</p>
                            <div className=''>
                                <h2 className='heading'>Be You</h2>
                                <Image className='icon' src={'/landingpage-images/arrow.svg'} width={53.34} height={32.25} alt={''} />
                                <p className='text-white'>That’s the catch – if you want a genuine connection, you’ve got to open up your true self. Brene Brown has a very insightful take on it in her famous TED talk “The power of vulnerability” (link). But for the sake of using the Game App, no need to go that deep just yet. Simply remember to:</p>
                                <ul className='text-white'>
                                    <li> Upload your real photos (not photos of your dog.. and not photos of you 10 years ago);</li>
                                    <li> Provide links to your social media (we’ll verify your account, but it won’t be visible to other users)</li>
                                    <li> Provide true information about yourself when creating your profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        
                    </div>
                </div>
            </div>
        </LandingpageLayout>
    )
}

export default page
