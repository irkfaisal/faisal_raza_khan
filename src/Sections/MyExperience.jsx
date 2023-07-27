import React from 'react'
import { role_resp } from '../Constants/Data'
import Heading from '../Components/Heading'

const MyExperience = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center '>
        <Heading heading={"Experience"} />
        <div className=' flex sm:flex-row flex-col justify-center '>
          <div className=' flex flex-col ' id="left-side">
            <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.7rem] text-[1.2rem] ss:leading-[50px]'>Step To Soft</h1>
            <p className='text-white font-poppins font-semibold ss:text-[1.2rem] text-[1rem] ss:leading-[25px]'>React js Developer (Intern)</p>
            <p className='text-white font-poppins font-semibold ss:text-[1rem] text-[0.8rem] ss:leading-[35px]'>Dec 2022 - present</p>
          </div>
          <div className='text-white w-full flex flex-col justify-start  p-[12px]  rounded-xl' id="right-side">
            <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.5rem] text-[1rem] ss:leading-[25px]'>Roles & Responsibility</h1>
            <p>As an React js intern developer , I have gain hands-on experience and contribute to the development of our web applications. I have work closely with senior developers and the development team to learn and enhance your skills.</p>
            <p>Here are some of the key responsibilities:</p>
            {
              role_resp.map((item, index) => {
                return (
                  <p key={item.id} >{`${item.id}: ${item.text}`}</p>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default MyExperience