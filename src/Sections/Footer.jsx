import React from 'react'
import { personalData } from '../Constants/Data'
import { heart } from '../assets'

const Footer = () => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center gap-4'>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#eee]' id="details">
          <div className='w-full flex sm:flex-row flex-col xs:justify-between justify-start text-white'>
            {
              personalData.map((item, index) => {
                return (
                  <div className='flex flex-col justify-center items-center gap-3 ' key={item.id}>
                    <img className='w-[25px] h-[25px]' src={item.icon} alt='location' />
                    <h1>{item.text}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='text-white w-full flex flex-col items-center gap-2 border-t-[1px] p-4 border-t-[#3F3E45]' id="somedetails">
          <span>{`Developed by Md Faisal Raza Khan`}</span>
          {/* <p>If you like this portfolio, just give a start on Github <a href=''>https:Github.irkfaisl/</a></p>
          <span>also checkout the reporistory,from folder structure to css code evrything is so optimised</span> */}
        </div>
      </section>
    </>
  )
}

export default Footer