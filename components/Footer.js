import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-full h-12 flex flex-row justify-between items-center px-20 select-none bg-slate-100/50 backdrop-blur-md'>

            <h4 className='text-slate-900 font-bold'>This is a live demo created by Anthony Gomez.</h4>

            <div className='transition-all flex flex-row gap-x-12 text-slate-900 font-semibold'>
                <Link className='transition-all hover:scale-105' href='#'></Link>
                <Link className='transition-all hover:scale-105' href='mailto:angpersonal@outlook.com'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                </Link>
                <Link className='transition-all hover:scale-105' href='#'>My account</Link>
            </div>
        </footer>
    )
}

export default Footer
