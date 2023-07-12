'use client'

import Image from 'next/image';
import { products } from '@/data/products';
import Buttons from '@/components/Buttons';
import ColorOptions from '@/components/ColorOptions';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {


  const [counter, setCounter] = useState(0);


  const handleNext = () => {
    if (counter === products.length - 1) {
      setCounter(0);
    }
    else {
      setCounter(counter + 1);
    }
  }


  const handlePrev = () => {
    if (counter === 0) {
      setCounter(products.length - 1);
    }
    else {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    const background = document.querySelector('#background');
    background.style.background = `radial-gradient(circle,${products[counter].lightColor} 10%,${products[counter].color} 100%)`;
  }, [counter]);


  return (
    <main id='background' className={`transition-all w-screen h-screen flex flex-col py-2 select-none`}>
      <navbar className='w-full h-16 flex flex-row justify-between px-4'>
        <div className=''>Airpods Max</div>
        <div className='flex flex-row gap-x-4'>
          <span>Gallery</span>
          <span>Overview</span>
          <span>My account</span>
        </div>
      </navbar>
      <div className='h-full grid grid-cols-2 place-content-center'>
        <div className='flex flex-col py-8 space-y-12 px-36 justify-center'>
          <h2 className='font-bold text-slate-900 text-6xl '>AirPods MAX</h2>
          <p className='text-lg text-slate-900'>a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
          <div className='flex flex-row gap-4 w-full justify-between'>
            <ColorOptions />
            <Buttons textColor='white' styleClass='transition-all bg-blue-600 hover:bg-blue-700 hover:scale-110 rounded-full px-8 py-2 font-bold text-white flex flex-row gap-4 justify-center items-center' text={<>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg><span>$549</span></>}></Buttons>
          </div>
        </div>
        <div className='relative'>

          <div className='py-20'>
            <Image src={products[counter].image} alt='product' width={1200} height={300} />
          </div>
          <div className='bottom-4 absolute mx-auto flex flex-row justify-center items-center gap-4 w-full '>
            <Buttons action={handlePrev} styleClass='transition-all bg-slate-900 rounded-full text-white p-3 hover:scale-105'
              text={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              }></Buttons>
            <span>{counter + 1}</span>
            <Buttons action={handleNext} styleClass='transition-all bg-slate-900 rounded-full text-white p-3 hover:scale-105' text={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            }></Buttons>
          </div>
        </div>
      </div>
    </main >
  )
}
