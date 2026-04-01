import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const NavigationData = [
  { id: 1, name: "Products", path: "/product" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "FAQ", path: "/faq" },
];

const NavBarResponsive = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-15 py-4 border-b relative">

      
      <h1 className="text-blue-600 font-bold text-3xl">DigiTools</h1>

      
      <ul className="hidden md:flex gap-6">
        {NavigationData.map(item => (
          <li key={item.id}>
            <a href={item.path} className="hover:text-blue-500 font-bold">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      
      <div className="hidden md:flex items-center gap-4">
        <ShoppingCart className="cursor-pointer" />
        <button>Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>

     
      <div className="md:hidden z-50" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </div>

      
      <div
        className={`absolute left-0 w-full bg-white shadow-md transition-all duration-300 md:hidden
        ${open ? "top-16" : "-top-80"}`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {NavigationData.map(item => (
            <li key={item.id}>
              <a href={item.path} onClick={() => setOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex flex-col items-center gap-4 pb-6">
          <ShoppingCart />
          <button>Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>

    </nav>
  );
};

export default NavBarResponsive;