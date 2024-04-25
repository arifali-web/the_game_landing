'use client'
import TextComp from '@/component/shared/text/text'
import LandingpageLayout from '@/component/shared/layout/landingpage'
import React, { useEffect, useState } from 'react'
import BlogText from '@/component/shared/text/blog'
import List from '@/component/shared/text/list'
import BeYou from '@/config/landingpageData/BeYou'
import Image from 'next/image'
import Table from '@/component/partials/table/table'




function page() {

    const [innerWidth, setInnerWidth] = useState(undefined as any)
    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    return (
        <LandingpageLayout>
            <div className='inner-blog px-lg-5'>
                <div className='blog3 text-center'>

                    <TextComp heading='The Choice Paradigm'
                        subHeading='Dive into the intricacies of the 10-criteria system proposed by the Love Method and realize why they will serve as your reliable guide on the path to long-term happiness.'
                        buttontext='Step Into The Game'
                    />


                </div>
                <div className='row px-lg-5 px-2 blog3-text'>
                    <div className="col-lg-6 col-12 text-start">
                        <Image src={'/landingpage-images/blog3sideimg.svg'} style={{ width: '100%', height: '100%' }} alt='' height={500} width={500} />
                    </div>
                    <div className="col-lg-6 col-12 text-start">
                        <h4 className='heading'>
                            <span className='span-t'>What are the 10</span><br />
                            Magic criteria <br />
                            <span className='span-b d-flex justify-content-center'>that help choose the right partner?</span>
                        </h4>
                        <p className='txt pt-5'>
                            Ok, so we’ve seen in the previous blog post that instead of confusing love with infatuation or habit, the Love Method proposes a system of 10 criteria to make the right choice of a long term partner.
                        </p>
                        <p className='txt'>
                            Now it’s time to get really serious and to dive into the details. And let’s make a deal - before exclaiming “Oh but this looks like a business case, it’s not romantic!” - just read till the end - and then we’ll talk ;)
                        </p>
                        <li>
                            The first six criteria represent the “Desirability” scale: do I want to be with this person?
                        </li>
                        <li>
                            The last four criteria represent the “Feasibility” scale: is it possible to be with this person?
                        </li>
                        <h2 className='heading pt-5'>Desirability</h2>
                        <h3 className='sub-heading py-3'>Here are the criteria on <br /> the “Desirability” scale:</h3>
                        <ul className='list-p'>
                            <li>
                                Physical attraction
                            </li>
                            <li>Emotional attraction</li>
                            <li>Intellectual interest</li>
                            <li>Them as a personality</li>
                            <li>How they make me feel</li>
                            <li>How they feel about me</li>
                        </ul>

                        <h2 className='heading pt-5'>Feasibility</h2>
                        <h3 className='sub-heading py-3'>Here are the ones on <br /> the “Feasibility” scale:</h3>
                        <ul className='list-p'>
                            <li>
                                Geographical distance
                            </li>
                            <li>Socio-cultural background</li>
                            <li>Family consent</li>
                            <li>Availability</li>

                        </ul>

                    </div>

                    <div className='col-12  pt-5'>
                        <h2 className='heading'>Why the Love Method criteria are absolutely amazing</h2>

                    </div>
                    <div className='col-12 col-lg-6'>
                        <p className='txt pt-5'>We’ll examine each criteria in depth in our upcoming posts, for now it’s just important to mention three key general observations to show they are absolutely amazing.</p>
                        <p className='txt'>
                            First of all, keep in mind that each criterion is very large: like an umbrella, it encompasses many narrower terms, and all together these criteria are MECE: Mutually Excluding and Collectively Exhaustive. Borrowed from strategy consulting jargon, this refers to a framework used in data analysis that makes data easier to analyze and helps derive meaningful conclusions. Which is  exactly what we need when choosing a long term partner - because if this isn’t the most important decision in our lives, we honestly don’t know what is!
                        </p>
                        <p className='txt'>
                            Secondly, as mentioned earlier, these criteria are universal, they are set in stone. Which doesn’t mean that the importance attributed to each of them ,can’t change from person to person - as a matter of fact, it varies greatly, which is precisely the reason why most dating apps’ algorithms and matchmakers’ approaches don’t work: humans and their preferences are just way too complex. Sometimes we don’t even know what we want ourselves! The work of reflecting on our priorities and 	attributing relative weights to each criteria is a fundamental step on the way of building a harmonious relationship.
                        </p>
                        <p className='txt'>
                            Lastly, these criteria can be used in the beginning of a relationship - when making a choice to settle with someone or not - as well as later on once the relationship is stable. In this case, it is very helpful to review each of them and examine if the scores have lowered, stayed the same or improved- and if they have lowered, explore the potential ways to solve the problem.
                        </p>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Image alt='' style={{ width: '100%' }} src={'/landingpage-images/rose.svg'} height={500} width={500} />
                    </div>

                    <div className='col-12 col-lg-6 '>
                        <Image alt='' style={{ width: '100%' }} src={'/landingpage-images/action-img.svg'} height={863} width={1663} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h2 className='heading'>Criteria in action</h2>
                        <p className='txt'>
                            Now let’s visualize how this all works on a particular example.
                        </p>
                        <p className='txt'>
                            Let’s say Katty went on a date with John, Kevin and Aron. All three dates went well, but she doesn’t have time to waste and is looking to settle down and start a family. Imagine she proceeds with the Love Method; Katty’s first step would be to decide on her priorities for a long term partner among the 10 criteria. Below are her results:
                        </p>
                        <ul className='list-p'>
                            <li>
                                Physical attraction - 5%
                            </li>
                            <li>Emotional attraction - 5%</li>
                            <li>Intellectual interest - 50%</li>
                            <li>Them as a personality - 20%</li>
                            <li>How they make me feel - 15%</li>
                            <li>
                                How they feel about me - 5%</li>
                        </ul>
                        <p className='txt'>
                            John, Kevin and Aron are all super nice guys, but she is attracted to each of them for different reasons: she has crazy chemistry with John and likes his big biceps; Kevin is a very established professional famous in his field and seems to have fallen instantly in love with her; with Kevin, she they talked for hours about ancient history and economics, and his calm presence makes her feel understood and valued.

                            <br /> Here are the scores she give to the three dates:
                        </p>
                        <table className='text-white table'>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>John</th>
                                <th>Kevin</th>
                                <th>Aron</th>
                            </tr>
                            <tr>
                                <td>Physical attraction</td>
                                <td>5%</td>
                                <td>10</td>
                                <td>5</td>
                                <td>7</td>

                            </tr>
                            <tr>
                                <td>Emotional attraction</td>
                                <td>5%</td>
                                <td>7</td>
                                <td>5</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Intellectual interest</td>
                                <td>50%</td>
                                <td>5</td>
                                <td>6</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>Them as a personality</td>
                                <td>20%</td>
                                <td>5</td>
                                <td>9</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>How they make me feel</td>
                                <td>15%</td>
                                <td>6</td>
                                <td>7</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>How they feel about me</td>
                                <td>5%</td>
                                <td>6</td>
                                <td>10</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Weighted subtotal score</td>
                                <td></td>
                                <td>5,55</td>
                                <td>6,85</td>
                                <td>9,1</td>
                            </tr>
                        </table>

                        <p className='txt'>
                            So the winner is… Aron!
                        </p>
                        <p className='txt'>

                            Of course the score can change once Katty gets to know him better - but it is a good general indicator even after only one date.
                        </p>
                        <p className='txt'>

                            And the great news is - once the thinking and reflecting is done, Katty can fully enjoy the time with Aron and concentrate on the pleasure of the present moment, instead of worrying whether she is doing the right thing. It also allows her to gain more clarity and capacity to react to changing circumstances and change the course of action if necessary - all while putting herself and her true needs and priorities before everything else.
                        </p>


                    </div>
                </div>

            </div>
        </LandingpageLayout>
    )
}

export default page
