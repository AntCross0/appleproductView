import React from 'react';
import Image from 'next/image';

const size = 140;
export const PrevImage = ({ counter, products, action }) => {
    if (counter === 0) {
        counter = products.length - 1;
    }
    else {
        counter = counter - 1;
    }
    return (
        <div className='transition-all z-50 absolute top-1/2 sm:top-12 sm:right-0 md:right-10 lg:right-4 blur-[2px]  sm:hover:scale-110' onClick={action}>
            <Image src={products[counter].image} alt='product' width={size} height={size} />
        </div>
    )
}

export const NextImage = ({ counter, products, action }) => {
    if (counter === products.length - 1) {
        counter = 0;
    }
    else {
        counter = counter + 1;
    }
    return (
        <div className='transition-all z-50 absolute right-0 bottom-1/2 sm:bottom-12 sm:right-0 md:right-10 lg:right-4 blur-[2px]  sm:hover:scale-110' onClick={action}>
            <Image src={products[counter].image} alt='product' width={size} height={size} />
        </div>
    )
}

