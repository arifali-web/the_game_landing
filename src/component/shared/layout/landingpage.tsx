import React from 'react'
import NavBar from './inner/navbar';
import Footer from './inner/footer';

function LandingpageLayout({
    children
}: any) {
    return (
        <div className='landingpage'>
            <div className='container-fluid layout '>
                <NavBar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default LandingpageLayout;
