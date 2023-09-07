import React from 'react'
import { skills } from '../Constants/Data'
import Heading from '../Components/Heading'

const Skills = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-[1rem]' id="Skills">
        <Heading heading={"Familiar with Technologies"} />
        <div className=' flex justify-evenly items-center feature-card-bg w-full  rounded-xl py-[3rem]'>
          {
            skills.map((item, index) => {
              return (
                <div className='flex flex-col justify-center items-center bg-dimBlue rounded-xl feature-card px-[12px] py-[6px]' key={item.id}>
                  <img src={item.icon} alt='icons' className='w-[3rem] h-[3rem] object-contain' />
                  <p className='text-gradient'>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Skills