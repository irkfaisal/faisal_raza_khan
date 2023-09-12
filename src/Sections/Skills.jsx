import React from 'react'
import { skills } from '../Constants/Data'
import Heading from '../Components/Heading'
import SkillDiv from '../Components/SkillsDiv'

const Skills = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-[10px]' id='Skills'>
        <Heading heading={"Familiar with Technologies"} />
        <div className='feature-card-bg rounded-xl w-full h-[auto] p-4'>
          {/* first row skill div */}
          <div className='flex justify-center items-center md:flex-row flex-col  w-full h-[auto] pt-[2ren]  md:gap-0 gap-8'>
            <div className=' w-[50%] flex flex-row justify-center items-center  sm:gap-2 gap-4'>
              <SkillDiv skillsSlice={skills.slice(0, 3)} />
            </div>
            <div className=' w-[50%] flex flex-row justify-center items-cente sm:gap-2 gap-4'>
              <SkillDiv skillsSlice={skills.slice(3, 6)} />
            </div>
            <div className=' w-[50%] flex flex-row justify-center items-center sm:gap-2 gap-4'>
              <SkillDiv skillsSlice={skills.slice(6, 9)} />
            </div>
          </div>
          {/* 2nd row skill div */}
          <div className='flex justify-center items-center md:flex-row flex-col  w-full h-[auto]  pb-[10px] pt-[1rem] md:gap-0 gap-8'>
            <div className=' w-[50%] flex flex-row justify-center items-cente sm:gap-2 gap-4'>
              <SkillDiv skillsSlice={skills.slice(9, 12)} />
            </div>
            <div className=' w-[50%] flex flex-row justify-center items-cente sm:gap-2 gap-4'>
              <SkillDiv skillsSlice={skills.slice(12, 14)} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills











//////////
// {
//   skills.map((item) => {
//     return (
//       <div className='flex flex-col justify-center items-center bg-dimBlue rounded-xl feature-card px-[12px] py-[6px]' key={item.id}>
//         <img src={item.icon} alt='icons' className='w-[3rem] h-[3rem] object-contain' />
//         <p className='text-gradient'>{item.name}</p>
//       </div>
//     )
//   })
// }