import React, { use } from 'react';
import CardDetails from './cardDetails';



const Card = ({DataPromise,selectedCart,setSelectedCart}) => {
   
    const datas = use(DataPromise);
    
    
    return (
         <div className='grid sm:grid-cols-2 md:grid-cols-3 justify-evenly gap-5 px-4 sm:px-8 md:px-12 lg:px-16'>
            {
                datas.map((data,index) =><CardDetails
                key={index}
                data={data}  selectedCart={selectedCart} setSelectedCart={setSelectedCart}></CardDetails>
              )
               
            }
           
         </div>
    )
}

export default Card;
