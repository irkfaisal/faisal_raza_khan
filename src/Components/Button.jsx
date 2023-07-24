import React from 'react'

const Button = ({ style, Btntitle }) => {
    return (
        <>
            <button type='button' className={` mx-2 py-2 px-3 bg-blue-gradient font-poppins font-medium text-primary outline-none  ${style} rounded-lg`}>
                {Btntitle}
            </button>
        </>
    )
}

export default Button