import React from 'react'

const Tooltip = ({ title }) => {
    return (
        <>
            <section class="group relative m-12 flex justify-center">
                <span class="absolute top-10 scale-0 rounded bg-white p-2 text-xs text-black group-hover:scale-100">{title}</span>
            </section>
        </>
    )
}

export default Tooltip