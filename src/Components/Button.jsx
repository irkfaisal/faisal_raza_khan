import React from 'react'

const Button = ({ style, Btntitle, onClick }) => {
    return (
        <>
            <button type='button' className={`transition delay-150 duration-300 ease-in-out ... mx-2 py-2 px-3 bg-blue-gradient font-poppins font-medium text-primary outline-none  ${style} rounded-lg`} onClick={onClick}>
                {Btntitle}
            </button>
        </>
    )
}

export default Button