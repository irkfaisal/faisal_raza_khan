import React from 'react'

const Heading = ({ heading }) => {
    return (
        <>
            <h1 className='text-white text-gradient text-center font-poppins font-semibold ss:text-[2rem] text-[1.5rem] ss:leading-[75px]'>
                {heading}
            </h1>
        </>
    )
}

export default Heading