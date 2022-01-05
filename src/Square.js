import React from 'react'

const square = ( {colorValue, hexValue, isDarkText}) => {
    return (
        <section 
        className='square'
        style={{
            backgroundColor: colorValue,
            color: isDarkText ? "#000" : "#FFF"
        }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}


export default square
