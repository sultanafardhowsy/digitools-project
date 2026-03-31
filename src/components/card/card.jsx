import React, { use } from 'react';
import CardDetails from './cardDetails';


const Card = ({DataPromise}) => {
   
    const datas = use(DataPromise);
   
    
    return (
         <div className='grid md:grid-cols-3 justify-evenly gap-5 mx-30'>
            {
                datas.map((data,index) =><CardDetails
                key={index}
                data={data}></CardDetails>)
            }
           
         </div>
    )
}

export default Card;