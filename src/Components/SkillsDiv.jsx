import React from 'react'

const SkillDiv = ({ skillsSlice }) => {
    return (
        <>
            {skillsSlice.map((item) => (
                <div className=' min-w-[6rem] min-h-[6rem] flex flex-col justify-center items-center bg-dimBlue rounded-xl feature-card px-[12px] py-[6px]' key={item.id}>
                    <img src={item.icon} alt='icons' className='w-[3rem] h-[3rem] object-contain' />
                    <p className='text-gradient'>{item.name}</p>
                </div>
            ))}
        </>
    )
}

export default SkillDiv