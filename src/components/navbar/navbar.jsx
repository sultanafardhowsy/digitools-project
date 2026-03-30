import React from 'react';
import { BiCart } from "react-icons/bi";

const Navbar = () => {
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
    <span className='pt-3'><BiCart /></span>
    <button className='font-bold'>Login</button>
    <button className="btn bg-blue-600 text-white rounded-3xl">
     Get Started
    </button>
  </div>
</div>


    );
};

export default Navbar;