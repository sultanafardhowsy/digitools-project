import React, { Suspense } from 'react';
import { useState } from 'react';
import Card from '../card/card';
import CartItem from '../cartItem/CartItem';





const Premium = ({DataPromise,cartValue,setCartValue}) => {
  const [selectedType, setSelectedType] = useState("products");
  const [selectedCart,setSelectedCart] = useState([]);
   
    return (
        <div className='justify-items-center py-20 mx-10 mb-10'>
          <h1 className='text-4xl font-bold pb-5'>Premium Digital Tools</h1>  
          <p className='text-gray-500 pb-5'>Choose from our curated collection of premium digital products designed<br/>
          to boost your productivity and creativity.</p>
          <div className='mb-10'>
            <button onClick={() =>setSelectedType("products")} className={`btn ${selectedType === "products" ? "bg-linear-to-r from-blue-600 to-purple-600" :""} rounded-4xl mr-5`}>Products</button>
            <button onClick={() =>setSelectedType("cart")} className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-blue-600 to-purple-600" :""} border-t-neutral-50 rounded-4xl`}>Cart ({cartValue})</button>
          </div>
          {
            selectedType === "products" ? 
           <Suspense fallback=
           { <span className="loading loading-dots loading-md"></span>}>
     <Card DataPromise={DataPromise} cartValue={cartValue} setCartValue={setCartValue} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></Card>
  </Suspense>: <CartItem selectedCart={selectedCart} setSelectedCart={setSelectedCart}></CartItem>    
             }
        </div>
    );
};

export default Premium;
