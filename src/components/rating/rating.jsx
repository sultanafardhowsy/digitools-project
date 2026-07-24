import React from 'react';

const Rating = () => {
    return (
        <div className='w-11/12 mx-auto bg-linear-to-r from-blue-700 to-purple-600 grid md:grid-cols-3 justify-items-center text-white px-6 sm:px-12 md:px-20 py-8 md:py-10 mt-10 rounded-2xl'>
            <div className='pt-3 pb-3 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>50K+</h1>
            <p>Active Users</p>
            </div>
            <div className='pt-3 pb-3 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>200+</h1>
            <p>Premium Tools</p>
            </div>
            <div className='pt-3 pb-3 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>4.9</h1>
            <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;
