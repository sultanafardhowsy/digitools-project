import React from 'react';
import userImage from '../../assets/products/user.png'

const StepSection = () => {
    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
            <h4 className='text-center mt-4'>Start using premium digital tools in minutes, not hours.</h4>
            
            
            
                <div className='grid md:grid-cols-3'>
                    <div className='mb-5'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5' src={userImage} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Create Account</p>
                    <p className='text-center'>Sign up for free in seconds. No credit card<br/> required to get started.</p>
                </div>
                <div className='mb-5'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5' src={userImage} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Create Account</p>
                    <p className='text-center'>Sign up for free in seconds. No credit card<br/> required to get started.</p>
                </div>
                <div className='mb-5'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5' src={userImage} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Create Account</p>
                    <p className='text-center'>Sign up for free in seconds. No credit card<br/> required to get started.</p>
                </div>
                </div>
        </div>
    );
};

export default StepSection;