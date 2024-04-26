import LandingpageLayout from '@/component/shared/layout/landingpage'
import BlogText from '@/component/shared/text/blog'
import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <LandingpageLayout >
      <div className='about-inner px-md-5'>
        <div className='row'>
          <div className="col-lg-6 col-12 pt-5">
            <h2 className='heading'>Meet  the founder</h2>
            <div className='d-flex gap-2 '>
              <Image src={'/landingpage-images/arrow2.svg'} width={94.13} height={165} alt={''} />
              <h3 className='sub-heading rebond-extralight'>behind The Game</h3>
            </div>
            <div className='d-flex gap-2'>
              <p>Hi. I am Maria Moskvina, Co-Founder and CEO of The Game – Love and relationship management platform, and here is my story.</p>
              <Image src={'/landingpage-images/heart-img.svg'} width={99.32} height={130.22} alt={''} />
            </div>
          </div>
          <div className='col-lg-6 col-12 '>
            <Image src={'/landingpage-images/teammember-img.svg'} style={{ objectFit: 'contain', overflow: 'hidden', width: '100%', height: '100%' }} width={850} height={700} alt={''} />
          </div>
        </div>
        <div className="row py-5 founder">
          <div className="col-lg-6 col-12">
            <BlogText
              heading='How'
              subHeading='it started'
              number={1}
              src='/landingpage-images/arrow.svg'
              text='It starts in spring, on one cold and rainy Parisian evening when I got home after a long day at the super high pressure but fun work at one of the big consulting firms, made some frozen pizza in the oven, opened my laptop and… started my second job: replying to messages from guys on various online dating sites. 25 years old, freshly single, happy and free like the wind, I was eager to find new big love soon enough to bring him to an upcoming friend’s wedding in October the same year. “Gosh… I don’t remember what I replied to whom with all this message inflow..” My brain was boiling from trying to figure out who all those people I’ve never met were and yet am spending my precious time talking to. On top of that, remembering whom I actually liked and wanted to go on a date with and scheduling that date was a challenge on its own.'
            />

            <BlogText
              heading='Miracle'
              subHeading='of a new perspective'
              number={2}
              src='/landingpage-images/arrow.svg'
              text='And then it hit me – nothing has really changed around me. Only my mindset has. That’s all. Instead of approaching dating as a second job, putting a lot of pressure on finding perfection and focusing on the end result, I somehow shook this drama off my shoulders and realized it is all an exciting game where I am the main character! Having my Excel spread sheet always updated (I was a consultant, after all), I felt no stress but lots of excitement – I get to choose my dates, discover new, completely unknown human beings whom I would never have met if it wasn’t for dating apps, learn something new about their jobs or hobbies, get to see men’s way of thinking, observe and compare their behavior, enjoy pleasant feelings of excitement and shimmering joy.'
            />

            <BlogText
              heading='Swiping'
              subHeading='under pressure of finding the one'
              number={3}
              src='/landingpage-images/arrow.svg'
              text='I guess it goes without saying that in the seven months that followed I did not find a date to bring to my friend’s wedding. Nor did I have fun meeting new interesting guys. All men I met back then turned out systematically to look and talk and behave in a way completely different from how I thought they would based on our interactions on dating apps, and, most importantly, doing all the dating like I was doing my day job only sucked energy out of me and left me feeling like a squeezed lemon.'            />
          </div>
          <div className="col-lg-6 col-12 right">
            <BlogText
              heading='The turning point'
              subHeading=''
              number={4}
              src='/landingpage-images/arrow.svg'
              text='What I didn’t know back then, is that things were about to change 180° in my love life. That night at the wedding my friend tried to match me with a friend of hers who, on paper, did actually look like a perfect match for me but in reality me + him were a complete disaster even for a few hours at the diner table. Which led me to down quite a few glasses of champagne, kiss a guy I didn’t find attractive in the middle of the dancefloor and end the night with my fuck-buddy at that time – feeling lonely, hopeless and worthless. I guess as it often happens, I had to hit the deep, very deep rock bottom in order to bounce back up.'
            />

            <BlogText
              heading='The magic'
              subHeading='of letting go'
              number={5}
              src='/landingpage-images/arrow.svg'
              text='After a break of a couple of months that I spent simply enjoying life as it was and not thinking about finding a man, I was back to dating apps. I was still flooded with too many irrelevant profiles, messages and date scheduling – but – all of a sudden, like by a stroke of a magic wand – 90% of the men I was meeting were amazing! They were fun, respectful, interesting, attractive and crazy into me. It was so fun to date them all that I found myself designing an Excel spread sheet to prioritize whom to see next!'
            />

            <BlogText
              heading='Happy end'
              subHeading=''
              number={6}
              src='/landingpage-images/arrow.svg'
              text='It is this playful and carefree Epicurean mindset – enjoy the moment and let the future unfold without worrying about what you can’t control – combined with deeper understanding of what is actually important for me to have in my long-term partner that I gained through rather vast dating experience – that I think led me to meeting the man who made it on top of the Excel rating and whom I can now call my beloved husband. Typing these words actually makes me smile right now.'
            />

            <BlogText
              heading='Sharing'
              subHeading='is caring'
              number={7}
              src='/landingpage-images/arrow.svg'
              text='I realized that I learnt powerful lessons and designed a helpful tool. I thought that other people looking for love could benefit from it too, if I shared the wisdom one day.
              The lessons I learned became the backbone of The Game App my team and I are launching this year. I like to call them The Game Rules. Before we get down to it, here is the catch – The Game Rules are here to make you shine. In the Game App world, we found a way to make your shine stand out from the crowd – thanks to the Game Score, which will get higher the more you practise the rules.'
            />
          </div>
        </div>
        <div className='text-center '>
          <h2 className='heading'>At the Heart</h2>
          <h3 className='sub-heading rebond-extralight'>of The Game</h3>
          <Button className='land-button my-5 d-inline-block align-items-center px-5'>Step Into The Game</Button>
        </div>
      </div>

    </LandingpageLayout>
  )
}

export default page
