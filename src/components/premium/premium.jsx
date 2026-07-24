import React, { Suspense } from 'react';
import { useState } from 'react';
import Card from '../card/card';
import CartItem from '../cartItem/CartItem';
import { toast } from 'react-toastify';




const Premium = ({DataPromise,selectedCart,setSelectedCart}) => {
  const [selectedType, setSelectedType] = useState("products");
  
  
    return (
        <div className='justify-items-center py-16 md:py-20 px-4 sm:px-8 mb-10'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold pb-5 text-center'>Premium Digital Tools</h1>  
          <p className='text-gray-500 pb-5 text-center text-sm sm:text-base'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          <div className='mb-10 flex flex-col sm:flex-row gap-3'>
            <button onClick={() =>setSelectedType("products")} className={`btn ${selectedType === "products" ? "bg-linear-to-r from-blue-600 to-purple-600" :""} rounded-4xl`}>Products</button>
            <button onClick={() =>{setSelectedType("cart"); toast("Cart item selected")}} 
            className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-blue-600 to-purple-600" :""} border-t-neutral-50 rounded-4xl`}>Cart ({selectedCart.length})</button>
          </div>
          {
            selectedType === "products" ? 
           <Suspense fallback=
           { <span className="loading loading-dots loading-md"></span>}>
     <Card DataPromise={DataPromise}  selectedCart={selectedCart} setSelectedCart={setSelectedCart} ></Card>
  </Suspense>: <CartItem selectedCart={selectedCart} setSelectedCart={setSelectedCart}></CartItem>    
             }
        </div>
    );
};

export default Premium;
