import React from 'react';
import { BiCart } from "react-icons/bi";

const Navbar = ({cartValue}) => {
    return (
   <div className="navbar bg-base-100 shadow-sm mx-auto flex flex-row justify-between w-11/12">
  <div className="">
    <a className="btn btn-ghost text-2xl font-bold text-[#4F39F6]">DigiTools</a>
  </div>
  <div >
    <ul className='flex flex-row justify-between gap-5 font-bold'>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </ul>
  </div>
  <div className="flex flex-row gap-5">
    {/* <span className='pt-3'><BiCart /></span> */}
{/* <button className="btn font-bold text-xl">
      <span className='pt-3'><BiCart size={30} /></span>
       {cartValue}
    </button> */}

     <div style={{ position: "relative", display: "inline-block" }}>
      <span className='pt-3'><BiCart size={30} /></span>
       <span style={{
            position: "absolute",
            top: -7,
            right: -5,
            background: "red",
            color: "white",  borderRadius: "50%",
            padding: "1px 3px"}}>
        {cartValue}
       </span>
     </div>

    <button className='font-bold'>Login</button>
    <button className="btn bg-blue-600 text-white rounded-3xl">
     Get Started
    </button>
  </div>
</div>


    );
};

export default Navbar;