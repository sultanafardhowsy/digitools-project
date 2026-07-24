import React, { useState } from 'react';
import { BiCart } from "react-icons/bi";
import { Menu, X } from "lucide-react";

const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

const Navbar = ({selectedCart}) => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
   <nav className="bg-base-100 shadow-sm w-full sticky top-0 z-50">
  <div className="w-11/12 mx-auto flex flex-row justify-between items-center py-3">
  <div>
    <a className="btn btn-ghost text-xl sm:text-2xl font-bold text-[#4F39F6]">DigiTools</a>
  </div>

  <ul className='hidden md:flex flex-row gap-5 font-bold'>
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
  </ul>

  <div className="hidden md:flex flex-row items-center gap-4">
     <div style={{ position: "relative", display: "inline-block" }}>
      <span><BiCart size={30} /></span>
       <span style={{
            position: "absolute",
            top: -7,
            right: -5,
            background: "red",
            color: "white",  borderRadius: "50%",
            padding: "1px 3px"}}>
       </span>
     </div>
    <button className='font-bold'>Login</button>
    <button className="btn bg-blue-600 text-white rounded-3xl">
     cart: {selectedCart.length}
    </button>
  </div>

  <div className="md:hidden z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </div>
  </div>

  <div className={`absolute left-0 w-full bg-white shadow-md transition-all duration-300 md:hidden ${menuOpen ? "top-14 opacity-100" : "top-14 opacity-0 pointer-events-none"}`}>
    <ul className="flex flex-col items-center gap-4 py-6 font-bold">
        {navLinks.map((link, i) => (
          <li key={i} className="cursor-pointer hover:text-blue-600" onClick={() => setMenuOpen(false)}>{link}</li>
        ))}
    </ul>
    <div className="flex flex-col items-center gap-4 pb-6">
      <div style={{ position: "relative", display: "inline-block" }}>
        <BiCart size={30} />
      </div>
      <button className='font-bold'>Login</button>
      <button className="btn bg-blue-600 text-white rounded-3xl">
       cart: {selectedCart.length}
      </button>
    </div>
  </div>
</nav>
    );
};

export default Navbar;
