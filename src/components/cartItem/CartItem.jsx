import React from 'react';
import BannerImage from '../../assets/products/shopping-cart.png'
import CardDetails from '../card/cardDetails';


const CartItem = ({selectedCart,setSelectedCart}) => {
    console.log(selectedCart);
    
    return (
        <div className='w-300 h-50 mt-10'>
          
             <p className='font-bold text-3xl'>Your cart</p> 
         

<div className="space-y-5">
        {selectedCart.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
           <img className='h-8 w-8' src={BannerImage} alt=""></img>
            <p className='text-center pt-5'>Your cart is empty</p>
          </div>
        ) : (
          selectedCart.map((data) => {
            return (
             
             <div key={data.id} className='flex flex-col-2 gap-4'>
             <div>
              <img
              src={data.icon}
              alt="Shoes" />
             </div>
              <div>
                <p>{data.name}</p>
                <p>${data.price}</p>
              </div>
             </div>

            );
          })
        )}
      </div>


        </div>
    );
};

export default CartItem;


