import teamMembers from '@/config/landingpageData/teamMembers'
import Image from 'next/image'
import React from 'react'

function AboutCard() {
  return (
    <div className='row'>
      {teamMembers.map((member, index) => (
        <div key={index} className='col-lg-4 col-12 about-card'>
          <div className='d-flex justify-content-center'>
            <Image alt='' src={member.image} height={387} width={387} className='rounde' />
          </div>
          <div className='d-flex justify-content-end py-2'>
            <Image alt='' src={member.icon} height={24} width={24} />
          </div>
          <div className='aboutcard'>
            <p className='card-title text-black py-3'>{member.description}</p>
            <p className='card-sub-title text-black'>
              {member.name} | <span className='text-red'>{member.title}</span>
            </p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default AboutCard
