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
        <div className='transition-all z-50 absolute bottom-20 -left-4 blur-[2px] hover:scale-110
        sm:bottom-0 sm:top-12 sm:-right-4 sm:left-auto
        lg:right-4  ' onClick={action}>
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
        <div className='transition-all z-50 absolute -right-4 bottom-20  blur-[2px] hover:scale-110
        sm:bottom-12 sm:-right-4 
        lg:right-4' onClick={action}>
            <Image src={products[counter].image} alt='product' width={size} height={size} />
        </div>
    )
}
