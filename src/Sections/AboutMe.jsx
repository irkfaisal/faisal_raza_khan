import React from 'react'
import { profilePicture } from '../assets'
import Heading from '../Components/Heading'

const AboutMe = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center' id="About_Me">
        <Heading heading={"About Me"} />
        <div className='flex sm:flex-row flex-col justify-start items-center w-full'>
          <div className={` relative overflow-hidden w-[200px] h-[200px] bg-blue-gradient p-[2px]  `} style={{ borderRadius: "50%" }}>
            <img src={profilePicture} className='w-full h-[auto]  object-contain ' alt='arrow' />
          </div>
          <div className='' id="right_aboutme">

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe