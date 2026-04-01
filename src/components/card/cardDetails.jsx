import React, { useState } from 'react';
import Features from './features';
import CartItem from '../cartItem/CartItem';

const CardDetails = ({data,selectedCart,setSelectedCart,setCartValue, cartValue}) => {
  const [selectedType, setSelectedType] = useState(false);

const tagStyles = {
  "Best Seller": "bg-yellow-100 text-yellow-700",
  "New": "bg-green-100 text-green-700",
  "Popular": "bg-blue-100 text-blue-700",
};

const handleCartValue =() => {
    
    cartValue=selectedCart.length;
 console.log(selectedCart);
 setSelectedCart([...selectedCart,data])
          }
        

    return (
       
                
            <div className="bg-white rounded-2xl shadow-md p-6 w-80 border border-gray-200 relative">

  
    <span
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${
          tagStyles[data.tag] || "bg-gray-100 text-gray-700"
        }`}
      >
        {data.tag}
      </span>

   
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
      <figure>
            <img
              src={data.icon}
              alt="" />
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

                  
<button
  onClick={() => {
    setSelectedType(true); 
    handleCartValue();     
  }}
  className={`w-full py-3 rounded-full text-white font-medium transition mt-4
    ${selectedType
      ? "bg-green-400 hover:bg-green-700"
      : "bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90"
    }`}
>
  {selectedType ? "Added to Cart" : "Buy Now"}
</button>

        </div>  )
           }

  

export default CardDetails;

  