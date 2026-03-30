import React from 'react';
import Features from './features';

const CardDetails = ({data}) => {
    return (
       
                
            <div className="bg-white rounded-2xl shadow-md p-6 w-80 border border-gray-200 relative">

  
    <span className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
      {data.tag}
    </span>

   
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
      <figure>
            <img
              src={data.icon}
              alt="Shoes" />
          </figure>
    </div>

   
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
    {data.name}
    </h2>

  
    <p className="text-gray-500 text-sm mb-4">
      {data.description}
    </p>

   
    <div className="mb-4">
      <span className="text-3xl font-bold text-gray-900">${data.price}</span>
      <span className="text-gray-500 text-sm">/Mo</span>
    </div>

    
    {
                data.features.map((feature,index) =><Features
                key={index}
                feature={feature}></Features>)
            }

   
    <button className="w-full py-3 rounded-full text-white font-medium 
                  bg-linear-to-r from-blue-600 to-purple-600
                   hover:opacity-90 transition mt-4">
      Buy Now
    </button>
   
        </div>  )
           }

  

export default CardDetails;