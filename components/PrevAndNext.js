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
        <div className='absolute top-12 right-24 blur-[2px] hover:scale-110' onClick={action}>
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
        <div className='absolute bottom-12 right-24 blur-[2px] hover:scale-110' onClick={action}>
            <Image src={products[counter].image} alt='product' width={size} height={size} />
        </div>
    )
}

