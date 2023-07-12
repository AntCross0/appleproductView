import React from 'react';

const Buttons = ({ id, bgcolor, textColor, text, styleClass, action }) => {
    return (
        <button
            id={id}
            onClick={action}
            className={styleClass}
            style={{
                backgroundColor: bgcolor,
                color: textColor,
            }}> {text}</button >
    )
}


export default Buttons;




