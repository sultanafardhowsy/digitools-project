import React from 'react';
import BannerImage from '../../assets/products/shopping-cart.png'
import CardDetails from '../card/cardDetails';
import { toast } from 'react-toastify';


const CartItem = ({selectedCart,setSelectedCart}) => {
    console.log(selectedCart);

    const handleDeletedItem = (data) => {
  const filteredItem = selectedCart.filter(
    (cartItem) => cartItem.name != data.name
  );

  setSelectedCart(filteredItem);
};
const total = selectedCart.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const checkOut = () =>{
    setSelectedCart([]);
  }    
    return (
        <div className='w-full max-w-2xl mx-auto mt-10 px-4'>
          
             <p className='font-bold text-2xl sm:text-3xl'>Your cart</p> 
         

<div className="space-y-5">
        {selectedCart.length === 0 ? (
          <div className="h-[400px] flex items-center justify-center flex-col gap-4">
           <img className='h-8 w-8' src={BannerImage} alt=""></img>
            <p className='text-center pt-5'>Your cart is empty</p>
          </div>
        ) : (
          selectedCart.map((data) => {
            return (
             
             <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center bg-amber-50 rounded-2xl p-4 gap-3'>
              <div key={data.id} className='flex items-center gap-4'>
             <div>
              <img className='h-7 w-7'
              src={data.icon}
              alt="" />
             </div>
              <div>
                <p className='font-medium'>{data.name}</p>
                <p>${data.price}</p>
              </div>
             </div>
             <div className='text-red-700'><button onClick={() =>handleDeletedItem(data)}>Remove</button></div>
            
             </div>
            );
          })
        )}
      </div>
      <div className='flex justify-between text-xl mt-5'>
        <h3>Total:</h3>
          <h3> ${total}</h3>
      </div>
      
      <button onClick={() => {
    checkOut();  toast("Checkout successful ");  
  }} className='bg-linear-to-r from-blue-600 to-purple-600 w-full h-10 text-white border-none rounded-4xl px-4 mt-5'>
       
        Proceed to Checkout
      </button>

        </div>
    );
};

export default CartItem;
