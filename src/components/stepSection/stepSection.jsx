import React from 'react';
import userImage from '../../assets/products/user.png'
import creatAccount from '../../assets/products/package.png'
import rocket from '../../assets/products/rocket.png'

const StepSection = () => {
    return (
        <div className='my-16 md:my-20 px-4 sm:px-8'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
            <h4 className='text-center mt-4 mb-10 text-sm sm:text-base'>Start using premium digital tools in minutes, not hours.</h4>
            
                <div className='grid md:grid-cols-3 w-full max-w-5xl mx-auto gap-6'>
                    <div className='mb-5 border border-amber-100 rounded-2xl p-6 relative'>
                        <span className='bg-blue-600 rounded-full px-4 py-2 absolute top-4 right-4 text-white text-sm'>01</span>
                    <img className='bg-slate-200 rounded-full py-5 px-5 mx-auto mb-5 mt-12 w-24 h-24 object-contain' src={userImage} alt="" />
                    <p className='text-xl sm:text-2xl font-bold text-center mb-3'>Create Account</p>
                    <p className='text-center text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='mb-5 border border-amber-100 rounded-2xl p-6 relative'>
                    <span className='bg-blue-600 rounded-full px-4 py-2 absolute top-4 right-4 text-white text-sm'>02</span>
                    <img className='bg-slate-200 rounded-full py-5 px-5 mx-auto mb-5 mt-12 w-24 h-24 object-contain' src={ creatAccount} alt="" />
                    <p className='text-xl sm:text-2xl font-bold text-center mb-3'>Choose Products</p>
                    <p className='text-center text-sm'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='mb-5 border border-amber-100 rounded-2xl p-6 relative'>
                    <span className='bg-blue-600 rounded-full px-4 py-2 absolute top-4 right-4 text-white text-sm'>03</span>
                    <img className='bg-slate-200 rounded-full py-5 px-5 mx-auto mb-5 mt-12 w-24 h-24 object-contain' src={rocket} alt="" />
                    <p className='text-xl sm:text-2xl font-bold text-center mb-3'>Start Creating</p>
                    <p className='text-center text-sm'>Download and start using your premium tools immediately.</p>
                </div>
                </div>
        </div>
    );
};

export default StepSection;
