import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white-800 text-black px-4 py-2">
      <div className="mr-4">
        <Image src={ logo } alt="Logo" className="w-36 h-auto" />
      </div>

      <div className="flex items-center">
        <a href="/" className="text-black mx-2 hover:text-gray-300">Categories</a>
        <a href="/about" className="text-black mx-2 hover:text-gray-300">Deals</a>
        <a href="/services" className="text-black mx-2 hover:text-gray-300">What's New</a>
        <a href="/contact" className="text-black mx-2 hover:text-gray-300">Delivery</a>
      </div>
    </nav>
  );
};

export default Navbar;
