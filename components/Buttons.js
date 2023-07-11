import React from 'react';
import { shoppincart } from '@/public/shopping-cart.svg';

const Buttons = ({ bgcolor, textColor, text, styleClass }) => {
    return (
        <button
            className={styleClass}
            style={{
                backgroundColor: bgcolor,
                color: textColor,
            }}>{text}</button>
    )
}

const ButtonIcon = ({ bgcolor, textColor, text, styleClass, svg }) => {
    return (
        <button className={styleClass} style={{
            backgroundColor: bgcolor,
            color: textColor,
        }}>
            {shoppincart}
            {text}
        </button>
    )
}

export default Buttons;
export { Buttons, ButtonIcon };




