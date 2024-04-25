'use client'
import TextComp from '@/component/shared/text/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import React, { useEffect, useState } from 'react'
import BlogText from '@/component/shared/text/blog'
import List from '@/component/shared/text/list'
import BeYou from '@/config/landingpageData/BeYou'



function page() {

    const [innerWidth, setInnerWidth] = useState(undefined as any)
    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    return (
        <LandingpageLayout>
            <div className='inner-blog px-lg-5'>
                <div className='blog2 text-center'>

                    <TextComp heading='The Game Mindset'
                        subHeading='Want to learn how to be a better dater? Start with the right mindset, and you’re 80% there. So before we dive into the Game Rules, here are some Game Mindset fundamentals.'
                        buttontext='Step Into The Game'
                    />
                    <div className='row px-lg-5 px-2 mt-5'>
                        <div className="col-lg-6 col-12 text-start">
                            <BlogText
                                heading={
                                    <h2 className='heading'>
                                        <span className='sub-heading'>There is no</span><br />
                                        perfect <br />
                                        <span className='sub-heading d-flex justify-content-end'>match</span>
                                    </h2>
                                }
                                subHeading=''
                                text='Unrealistic expectations are the fastest way to failure. It’s not the same as having your standards high and not lowering them for anything in the world – left alone for the color of someone’s beautiful eyes. In other words:'
                                number={1}
                                src={'/landingpage-images/arrow.svg'}
                            />
                            <List text='' litext={BeYou} />

                        </div>
                        <div className="col-lg-6 col-12 right text-start">
                            <BlogText
                                heading={
                                    <h2 className='heading'>
                                        <span className='sub-heading'>Have your</span><br />
                                        priorities <br />
                                        <span className='sub-heading d-flex justify-content-end'>straight</span>
                                    </h2>
                                }
                                subHeading=''
                                src={'/landingpage-images/arrow.svg'}
                                text='This one is related to the rule n.3, but this is so-so important that deserves a special dedication. If you truly want to settle down and start a family, swiping left on that gym bro who’s profile says “I can take you for a wild ride *wink*” is going to save you lots of time and nerves. Take time before you even meet anyone and make it clear for yourself what is it that you value the most in your potential romantic partner - and when you do meet someone, stick to your priorities.
                                P.S. You’ll find more about navigating this tricky game of prioritization in the Choice Paradigm post.
                                '
                                number={2}
                            />
                        </div>

                    </div>

                </div>
                <div className='row '>
                    <div className="col-lg-6 col-12 left text-start">
                        <BlogText
                            heading='Be patient'
                            subHeading=''
                            src={'/landingpage-images/arrow.svg'}
                            text='Dating isn’t a sprint – it’s a marathon. Dating online is fundamentally the same as dating off line, with the only difference that it accelerates the process: instead of meeting ten people in a year, you can meet 10 matches in a day. This implies you might also meet people that don’t really correspond to you – chemistry isn’t there, or sense of humor, or something else – but, in the same time, as you meet more people, your chances for meeting the right one increase as well, so the last thing to do is to give up and decide “it’s not for me” after just two “unsuccessful” (from what point of view?) dates. Being patient and enjoying the process, instead of over-stressing about the end result, will give you that amazing light and magnetic energy we all find so attractive.'
                            number={3}
                        />

                    </div>
                    <div className="col-lg-6 col-12 right text-start">
                        <BlogText
                            heading='Mindset'
                            subHeading='matters'
                            src={'/landingpage-images/arrow.svg'}
                            text='Join The Game if you’re willing to enjoy, play and explore LOVE. It doesn’t mean you have to stick to short-term fun and forget about long-term relationships – quite the opposite. We invite you to see it as an exciting game where each round can turn out to be a life-changing encounter, a learning opportunity, or a moment of fun and laughter – it’s up to you to find out! By leaving your options wide open, you don’t set yourself up for a disappointment, thus getting more joy in the moment. As a result, you’ll be contributing more positive energy to our community, increasing your chances to form meaningful and genuine connections – which may lead to many wonderful things. Just step into the game!'
                            number={4}
                        />
                    </div>

                    

                </div>

            </div>
        </LandingpageLayout>
    )
}

export default page
