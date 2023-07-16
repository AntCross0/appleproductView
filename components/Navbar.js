'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    const handleToggle = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
    };

    return (
        <header className='absolute z-50 top-0 w-full h-16 mx-auto px-2 sm:px-10 md:px-20 select-none'>
            <nav className='w-full flex flex-row justify-between items-center'>
                <div className="w-full">
                    <div className="flex items-center justify-between h-16">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex-shrink-0">
                                <div className='transition-all text-2xl font-black text-white'>Airpods Max</div>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex justify-end items-baseline space-x-4 text-white">
                                    <Link className='transition-all hover:scale-105' href='#'>Gallery</Link>
                                    <Link className='transition-all hover:scale-105' href='#'>Overview</Link>
                                    <Link className='transition-all hover:scale-105' href='#'>My account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="transition-all flex md:hidden">
                            <button id="hamburger-btn" onClick={handleToggle} type="button" className=" bg-slate-100/20 backdrop-blur-md inline-flex items-center justify-center p-2 rounded-md text-secundary-color hover:text-[#1E1E1E] hover:bg-secundary-color focus:outline-none ">
                                <span className="sr-only">Menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="menu" className="hidden md:hidden">
                    <div className=" bg-green-blacked rounded px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link className='transition-all hover:scale-105' href='#'>Gallery</Link>
                        <Link className='transition-all hover:scale-105' href='#'>Overview</Link>
                        <Link className='transition-all hover:scale-105' href='#'>My account</Link>
                    </div>
                </div>
            </nav>

            {/* <navbar className='w-full flex flex-row justify-between items-center'>
                <div className='transition-all text-2xl font-black text-slate-900'>Airpods Max</div>
                <div className='transition-all flex flex-row gap-x-12 text-slate-900 font-semibold'>
                    <Link className='transition-all hover:scale-105' href='#'>Gallery</Link>
                    <Link className='transition-all hover:scale-105' href='#'>Overview</Link>
                    <Link className='transition-all hover:scale-105' href='#'>My account</Link>
                </div>
            </navbar> */}
        </header>
    )
}

export default Navbar
