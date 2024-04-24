import { Drawer, Menu } from 'antd';
import Link from 'next/link';
import React from 'react'
import Navlink from './navLinks';


function MobileNavbar({
    open, setOpen
}: any) {
    return (
        <Drawer
            className='mobile-nav'
            title=""
            onClose={() => setOpen(false)}
            open={open}
        >
            <div className='mobile-navbar'>
                <Navlink />
            </div>
        </Drawer>
    )
}

export default MobileNavbar;
