import React from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import { Products } from './components/products'
import contents from './components/contents'
import banner from './assets/banner.jpg';

export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="hero">
        <Image src={banner} alt="hero" className="mx-8 h-90 w-100" />
      </div>
      <h1 className="text-black pl-8 py-6 text-lg font-bold">Headphones For You!</h1>
      <div className='app grid-cols-4' >
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        brand={contents.brand}
                        timeLeft={contents.timeLeft}
                    />
                ))}
            </div>
    </div>
    

  );
}
