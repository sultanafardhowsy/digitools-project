import React from 'react';

const Rating = () => {
    return (
        <div className='w-11/12 mx-30 bg-linear-to-r from-blue-700 to-purple-600 grid md:grid-cols-3 justify-items-center text-white px-20 py-10 mt-10 '>
            <div className='pt-5 pb-5'>
                <h1 className='text-4xl font-bold'>50K+</h1>
            <p>Active Users</p>
            </div>
            <div className='pt-5 pb-5'>
                <h1 className='text-4xl font-bold'>200+</h1>
            <p>Premium Tools</p>
            </div>
            <div className='pt-5 pb-5'>
                <h1 className='text-4xl font-bold'>4.9</h1>
            <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;