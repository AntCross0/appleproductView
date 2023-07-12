import React from 'react';
import { shoppincart } from '@/public/shopping-cart.svg';

const Buttons = ({ bgcolor, textColor, text, styleClass, action }) => {
    return (
        <button
            onClick={action}
            className={styleClass}
            style={{
                backgroundColor: bgcolor,
                color: textColor,
            }}>{text}</button>
    )
}


export default Buttons;




