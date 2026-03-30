import React from 'react';

const Premium = () => {
    return (
        <div className='justify-items-center py-20 mx-10'>
          <h1 className='text-4xl font-bold pb-5'>Premium Digital Tools</h1>  
          <p className='text-gray-500 pb-5'>Choose from our curated collection of premium digital products designed<br/>
          to boost your productivity and creativity.</p>
          <div>
            <button class="btn btn-primary rounded-4xl bg-linear-to-r from-blue-600 to-purple-600 mr-5">Products</button>
            <button className='btn border-t-neutral-50 rounded-4xl'>Cart (2)</button>
          </div>
        </div>
    );
};

export default Premium;
