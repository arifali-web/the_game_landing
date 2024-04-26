import latestBlog from '@/config/landingpageData/latestBlog';
import React from 'react'




function LatestCard() {
    return (
        <div className='row'>
            {latestBlog.map((item, index) => (
                <div className='col-lg-6 p-lg-5 p-0 py-5 col-12'>
                    <div key={index} className='box text-center'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h3>{item.number}</h3>
                    </div>
                    <div className='row pt-2'>
                        <h4 className='col-7 text-white rebond-regular'>{item.criterion}</h4>
                        <small className='col-5 text-end text-white rebond-light'>
                            <span>{item.author}</span>
                        </small>
                    </div>
                    <div className='row'>
                        <small className='col-8 text-white rebond-light'>The Game App team</small>
                        <small className='col-4 text-end text-white rebond-light'>{item.date}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LatestCard