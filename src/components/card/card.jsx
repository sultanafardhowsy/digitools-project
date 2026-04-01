import React, { use } from 'react';
import CardDetails from './cardDetails';


const Card = ({DataPromise,cartValue,setCartValue,selectedCart,setSelectedCart}) => {
   
    const datas = use(DataPromise);
    
    
    return (
         <div className='grid md:grid-cols-3 justify-evenly gap-5 mx-30'>
            {
                datas.map((data,index) =><CardDetails
                key={index}
                data={data} cartValue={cartValue} setCartValue={setCartValue} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></CardDetails>)
            }
           
         </div>
    )
}

export default Card;