import React, { useState } from 'react'
import { role_resp } from '../Constants/Data'
import Heading from '../Components/Heading'
import { arrowDown, arrowUp } from '../assets'
import styles from '../Styles'

const MyExperience = () => {
  const [seeMore, setSeeMore] = useState(true)
  return (
    <>
      {/* for large size screen */}
      <section className='ss:flex hidden flex-col justify-center items-center p-[1rem]' id="Experience">
        <Heading heading={"Experience"} />
        <div className=' flex sm:flex-row flex-col justify-center '>
          <div className=' flex flex-col ' id="left-side">
            <a href='' target='_blank' rel="noreferrer">
              <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.7rem] text-[1.2rem] ss:leading-[50px] cursor-pointer'>Techverse Origin Pvt Ltd</h1>
            </a>
            <p className='text-white font-poppins font-semibold ss:text-[1.2rem] text-[1rem] ss:leading-[25px]'>Software Developer</p>
            <p className='text-white font-poppins font-semibold ss:text-[1rem] text-[0.8rem] ss:leading-[35px]'>April 2024 - present</p>
            <p className='text-white font-poppins font-semibold ss:text-[1rem] text-[0.8rem] ss:leading-[35px]'>Noida, UP</p>
          </div>
          <div className='text-white w-full flex flex-col justify-start gap-3 p-[12px]  rounded-xl' id="right-side">
            <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.5rem] text-[1rem] ss:leading-[25px]'>Roles & Responsibility</h1>
            <p>As a Software Developer, I worked in both frontend and backend development, with a focus on creating optimized, scalable solutions using JavaScript frameworks and libraries. My responsibilities cover a range of tasks from building UI components to integrating APIs, writing SQL queries and writing thorough code documentation.</p>
            {
              role_resp.map((item,) => {
                return (
                  <p key={item.id} >{`${item.id}. ${item.area} ${item.text}`}</p>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* for mobile view */}
      <section className='ss:hidden block flex-col justify-center items-center p-[1rem]' id="Experience_">
        <Heading heading={"Experience"} />
        <div className=' flex sm:flex-row flex-col justify-center gap-4'>
          <div className=' flex flex-col gap-3' id="left-side">
            <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.7rem] text-[1.2rem] ss:leading-[50px]'>Step To Soft</h1>
            <p className='text-white font-poppins font-semibold ss:text-[1.2rem] text-[1rem] ss:leading-[25px]'>Software Developer</p>
            <p className='text-white font-poppins font-semibold ss:text-[1rem] text-[0.8rem] ss:leading-[35px]'>April 2024 - present</p>
            <p className='text-white font-poppins font-semibold ss:text-[1rem] text-[0.8rem] ss:leading-[35px]'>Noida, UP</p>
          </div>
          <div className='text-white w-full flex flex-col justify-start gap-3 p-[12px]  rounded-xl' id="right-side">
            <h1 className='text-white text-gradient font-poppins font-semibold ss:text-[1.5rem] text-[1rem] ss:leading-[25px]'>Roles & Responsibility</h1>
            <p>As a Software Developer, I worked in both frontend and backend development, with a focus on creating optimized, scalable solutions using JavaScript frameworks and libraries. My responsibilities cover a range of tasks from building UI components to integrating APIs, writing SQL queries and writing thorough code documentation.</p>
            {
              role_resp.map((item, index) => {
                return (
                  seeMore ?
                    index <= 0 ? <p key={item.id} >{`${item.id}. ${<b>{item.area}</b>} ${item.text}`}</p> : ""
                    :
                    <p key={item.id} >{`${item.id}: ${item.text}`}</p>
                )
              })
            }
            {/* see more and see less button */}
            <div className={`${styles.flexCenter}`}>
              {
                seeMore === true ? <>
                  <div id="arrUp" className={`animate-bounce w-[3rem] h-[3rem] rounded-full ${styles.flexCenter} bg-dimBlue`} onClick={() => setSeeMore(false)}>
                    <img src={arrowDown} alt="star" className="w-[80%] h-[80%] object-contain" />
                  </div>
                </> :
                  <>
                    <div id="arrDn" className={`animate-bounce w-[3rem] h-[3rem] rounded-full ${styles.flexCenter} bg-dimBlue`} onClick={() => setSeeMore(true)}>
                      <img src={arrowUp} alt="star" className="w-[80%] h-[80%] object-contain" />
                    </div>
                  </>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyExperience