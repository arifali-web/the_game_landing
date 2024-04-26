'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';



const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About us' },
  { href: '/investor-relation', text: 'Investor Relations' },
  { href: '/blogs', text: 'Blog: The Game Method' }
];
function Navlink() {
  const pathname = usePathname()

  return (
    <div className='d-flex nav-links gap-5 align-items-center text-white'>
      {links.map((link, index) => (
        <Link className={`text-white  ${pathname === link.href ? 'circle-sketch-highlight-white' : ''
          }`} key={index} href={link.href}>{link.text}</Link>
      ))}
    </div>
  )
}

export default Navlink
