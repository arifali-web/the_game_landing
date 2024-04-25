'use client'
import TextComp from '@/component/shared/text/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BlogText from '@/component/shared/text/blog'
import List from '@/component/shared/text/list'
import BeYou from '@/config/landingpageData/BeYou'
import kindness from '@/config/landingpageData/kindness'
import respect from '@/config/landingpageData/respect'
import courtesy from '@/config/landingpageData/courtesy'
import dating from '@/config/landingpageData/dating'



function page() {

    const [innerWidth, setInnerWidth] = useState(undefined as any)
    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    return (
        <LandingpageLayout>
            <div className='inner-blog px-lg-5'>
                <div className='blog1 text-center'>

                    <TextComp heading='The Game Rules'
                        subHeading='Now this is serious business – The Game Rules are tried and true principles that, if respected, will enable you to find and keep love. P.S. no need to print them out and stick on your fridge – The Game App will help and encourage dating by the Rules ;)'
                        buttontext='Step Into The Game'
                    />
                    <div className='row px-lg-5 px-2 mt-5'>
                        <div className="col-lg-6 col-12 text-start">
                            <BlogText
                                heading='Be You'
                                subHeading=''
                                text='That’s the catch – if you want a genuine connection, you’ve got to open up your true self. Brene Brown has a very insightful take on it in her famous TED talk “The power of vulnerability” (link). But for the sake of using the Game App, no need to go that deep just yet. Simply remember to:'
                                number={1}
                                src={'/landingpage-images/arrow.svg'}
                            />
                            <List text='' litext={BeYou} />

                        </div>
                        <div className="col-lg-6 col-12 right text-start">
                            <BlogText
                                heading={
                                    <h4 className='heading'>
                                        <span className='sub-heading'>Stay</span><br />
                                        Safe
                                    </h4>
                                }
                                subHeading=''
                                src={'/landingpage-images/arrow.svg'}
                                text='Don’t share your personal phone number, social media accounts, home / work address with people you’ve never met. Even if they seem perfectly charming. Let The Game App handle your dating life’s safety – we’ll never reveal your contact details to anyone on the app. If that match really is a good one, rest assured you’ll know when to give them your real phone number.'
                                number={2}
                            />
                        </div>

                    </div>

                </div>
                <div className='row '>
                    <div className="col-lg-6 col-12 left text-start">
                        <BlogText
                            heading={
                                <h4 className='heading'>
                                    <span className='sub-heading'>Be</span><br />
                                    kind, respectful <br />
                                    <span className='sub-heading text-center'>and</span> courteous
                                </h4>
                            }
                            subHeading=''
                            src={'/landingpage-images/arrow.svg'}
                            text='Life is already full of stress and angry people – why add your own negativity into it? Be what you want to attract, and I bet you want to be treated with kindness, respect and courtesy.'
                            number={3}
                        />
                        <List text='Here’s how we at The Game see kindness:' litext={kindness} />
                        <List text='He’s how we at The Game see respect:' litext={respect} />
                        <List text='Here’s how at The Game App we see courtesy:' litext={courtesy} />
                    </div>
                    <div className="col-lg-6 col-12 right text-start">
                        {
                            innerWidth < 999 ? <Image src={'/landingpage-images/mbl-img.svg'} style={{ width: '100%' }} width={788.95} height={600} alt={''} /> : <Image src={'/landingpage-images/side-img.svg'} style={{ width: '100%' }} width={788.95} height={1200} alt={''} />
                        }
                    </div>

                    <div className='col-12 col-lg-6'>
                        <BlogText
                            heading={
                                <h4 className='heading'>
                                    <span className='sub-heading text-center'>Its a Game, but a real one.</span><br />
                                    Stay committed
                                </h4>
                            }
                            subHeading=' '
                            src={'/landingpage-images/arrow.svg'}
                            text='Of course dating is supposed to be playful and fun, not boresome and stressful like a second job. BUT to play a game, at least two people need to be 100% in – who likes playing with ghosts?! So, once you’ve decided you’re all in for excitement and joy, stay committed! As much as we’d love to keep non-active members on the app to create an effect of a crowd with millions of active users and to pocket the subscription fees, we simply care more about quality than quantity. Being active and committed in this context means:'
                            number={4}
                        />
                        <List text='Here’s how we at The Game see kindness:' litext={dating} />
                    </div>
                    <div className='col-12 col-lg-6 right'>
                        <BlogText
                            heading={
                                <h4 className='heading'>
                                    <span className='sub-heading'>The Goal of The Game is</span><br />
                                    to Love better
                                </h4>
                            }
                            subHeading=' '
                            src={'/landingpage-images/arrow.svg'}
                            text='Respective these Rules when using the Game App will allow you to increase your overall Game Score.
                            The higher your score rating, the higher your visibility within the app, and the higher are your chances of getting the exclusive Game Club membership free of charge for 1 year. (We’ll tell you more about The Game Club soon).

                            Enjoy your game!'
                            number={5}
                        />

                    </div>
                </div>

            </div>
        </LandingpageLayout>
    )
}

export default page
