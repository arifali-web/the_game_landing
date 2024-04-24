'use client'
import Link from 'next/link';
import { title } from 'process';
import React from 'react';

interface LinkItem {
    href: string;
    text: string;
}

interface FooterLinksProps {
    title: string;
    links: LinkItem[];
}


const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
    <div>
        <p className='text-white'>{title}</p>
        <ul className='d-flex flex-column gap-1 p-0'>
            {links.map((link) => (
                <Link className='text-white light' key={link.href} href={link.href}>
                    {link.text}
                </Link>
            ))}
        </ul>
    </div>
);

export default FooterLinks;