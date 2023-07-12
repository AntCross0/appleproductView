import React from 'react';
import Buttons from './Buttons';
import { products } from '../data/products';

const ColorOptions = () => {

    return (
        <div className='w-full flex flex-row justify-center sm:justify-start gap-2 sm:gap-4'>
            {
                products.map((product, index) => {
                    return (
                        <Buttons styleClass='transition-all rounded-full h-12 w-12 shadow-md hover:scale-110' key={index} bgcolor={product.color}></Buttons>
                    )
                })
            }
        </div>
    )
}

export default ColorOptions
