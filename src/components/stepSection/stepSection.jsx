import React from 'react';
import userImage from '../../assets/products/user.png'
import creatAccount from '../../assets/products/package.png'
import rocket from '../../assets/products/rocket.png'

const StepSection = () => {
    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
            <h4 className='text-center mt-4 mb-10'>Start using premium digital tools in minutes, not hours.</h4>
            
            
            
                <div className='grid md:grid-cols-3 w-11/12 mx-auto'>
                    <div className='mb-5  border border-amber-100 rounded-2xl w-90 h-90'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5 mt-15' src={userImage} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Create Account</p>
                    <p className='text-center'>Sign up for free in seconds. No credit card<br/> required to get started.</p>
                </div>
                <div className='mb-5  border border-amber-100 rounded-2xl w-90 h-90'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5 mt-15' src={ creatAccount} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Choose Products</p>
                    <p className='text-center'>Browse our catalog and select the tools<br/>that fit your needs.</p>
                </div>
                <div className='mb-5  border border-amber-100 rounded-2xl w-90 h-90'>
                    <img className='bg-slate-200 rounded-full py-6 px-6 mx-25 mb-5 mt-15 ' src={rocket} alt="" />
                    <p className='text-2xl font-bold text-center mb-5'>Start Creating</p>
                    <p className='text-center'>Download and start using your premium <br/>tools immediately.</p>
                </div>
                </div>
        </div>
    );
};

export default StepSection;