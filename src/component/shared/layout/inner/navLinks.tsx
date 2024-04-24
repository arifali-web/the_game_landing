'use client'
import React from 'react'
import Link from 'next/link'
const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About us' },
  { href: '/investor-relation', text: 'Investor Relations' },
  { href: '/blogs', text: 'Blog: The Game Method' }
];
function Navlink() {
  return (
    <div className='d-flex nav-links gap-5 align-items-center text-white'>
      {links.map((link, index) => (
        <Link className='text-white' key={index} href={link.href}>{link.text}</Link>
      ))}
    </div>
  )
}

export default Navlink
