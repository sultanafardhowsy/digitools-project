import React from 'react';
import BannerImage from '../../assets/banner.png'
import play from '../../assets/play.png'


const Banner = () => {
    return (
        <div className='w-11/12 grid md:grid-cols-2 justify-between px-40 pt-20'>
          <div className='py-40'>
            <div className='flex gap-3 rounded-4xl justify-center items-center w-80 h-10 mb-5 bg-slate-200'>
                <div>
                    <div className="bg-blue-300 rounded-full w-6 h-6 absolute  flex items-center justify-center overflow-hidden"></div>
            <div className="bg-blue-600 rounded-full w-3 h-3 mt-1.5 ml-1.5 object-cover relative  "></div>
                </div>
            <p className='pb-5 text-blue-600 font-bold pt-5'>New: AI-Powered Tools Available</p>
            </div>
            <h1 className='text-xl font-bold mb-5'>Supercharge Your<br/><span className='text-blue-600'>Digital Workflow</span></h1>
            <p>Access premium AI tools, design assets, templates, and productivity<br/>
               software—all in one place. Start creating faster today.<br/>Explore Products</p>
               <div className='mt-5'>
                <button className="btn btn-primary rounded-4xl bg-linear-to-r from-blue-600 to-purple-600 mr-5">Explore Products</button>
                <button className="btn btn-neutral btn-outline rounded-4xl text-blue-600 border-blue-600"><img src={play}></img> Watch Demo</button>
               </div>
            </div>  
          <div><img src={BannerImage} alt="" /></div>
        </div>
    );
};

export default Banner;