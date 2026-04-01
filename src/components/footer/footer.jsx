import React from 'react';

const Footer = () => {
    return (
        <div>
          <footer className="bg-[#081225] text-gray-300 px-6 py-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-10">
        
       
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold mb-3">DigiTools</h3>
          <p className="text-sm opacity-80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

       
        <div>
          <h4 className="text-white mb-3 font-medium">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3 font-medium">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
        <p>Social Links</p>
      </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
        
      </div>
      
    </footer>  
        </div>
    );
};

export default Footer;