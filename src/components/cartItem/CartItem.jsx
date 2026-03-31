import React from 'react';
import BannerImage from '../../assets/products/shopping-cart.png'

const CartItem = () => {
    return (
        <div className='w-300 h-50 mt-10'>
          
            <p className='font-bold text-3xl'>Your cart</p> 
          
          <div className='mt-10 flex  justify-center'>
            <img className='h-8 w-8' src={BannerImage} alt=""></img>
            
          </div>
          <p className='text-center pt-5'>Your cart is empty</p>
        </div>
    );
};

export default CartItem;