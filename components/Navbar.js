import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <navbar className='absolute top-0 w-full h-16 flex flex-row justify-between items-center px-20 select-none'>
            <div className='transition-all text-2xl font-black text-slate-900'>Airpods Max</div>
            <div className='transition-all flex flex-row gap-x-12 text-slate-900 font-semibold'>
                <Link className='transition-all hover:scale-105' href='#'>Gallery</Link>
                <Link className='transition-all hover:scale-105' href='#'>Overview</Link>
                <Link className='transition-all hover:scale-105' href='#'>My account</Link>
            </div>
        </navbar>
    )
}

export default Navbar
