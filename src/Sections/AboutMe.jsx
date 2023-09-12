import React, { useState } from 'react'
import { profilePicture } from '../assets'
import Heading from '../Components/Heading'
import { arrowDown, arrowUp } from '../assets'
import styles from '../Styles'

const AboutMe = () => {
  const [seeMore, setSeeMore] = useState(true)
  return (
    <>
      <section className='ss:flex hidden flex-col justify-center items-center gap-3' id="About_Me">
        <Heading heading={"About Me"} />
        <div className='flex sm:flex-row flex-col justify-start items-center w-full'>
          <div className={` relative overflow-hidden w-[200px] h-[200px] bg-blue-gradient p-[2px]  `} style={{ borderRadius: "50%" }}>
            <img src={profilePicture} className='w-full h-[auto]  object-contain ' alt='arrow' />
          </div>
          <div className='text-white w-full flex flex-col justify-start gap-3 sm:p-[4rem] p-[2rem]' id="right_aboutme">
            <p>Hello, I'm Md Faisal Raza Khan, and I work as a front-end developer using MERN technologies. I recently graduated in August 2023 with a B.Tech degree from Asansol Engineering College, where I achieved a good CGPA of 8.7. During my last semester, I had the opportunity to intern as a React.js developer at Step to Soft.</p>
            <p>I have experience working on two MERN stack projects, and I've also started learning about backend development with Node.js. My goal for the future is to become a skilled full-stack developer.
            </p>
            <p>I'm really passionate about web development. I enjoy learning about JavaScript and find satisfaction in solving web development challenges.</p>
          </div>
        </div>
      </section>

      {/* for mobile view */}
      <section className='ss:hidden block flex-col justify-center items-center' id="About_Me_">
        <div>
          <Heading heading={"About Me"} />
        </div>
        <div className='flex sm:flex-row flex-col justify-start items-center w-full'>
          <div className={` relative overflow-hidden w-[200px] h-[200px] bg-blue-gradient p-[2px]  `} style={{ borderRadius: "50%" }}>
            <img src={profilePicture} className='w-full h-[auto]  object-contain ' alt='arrow' />
          </div>
          <div className='text-white w-full flex flex-col justify-start gap-3 sm:p-[4rem] p-[2rem]' id="right_aboutme">
            {
              seeMore ?
                <>
                  <p>Hi, I'm Md Faisal Raza Khan, and I work as a front-end developer using MERN technologies. I recently graduated in August 2023 with a B.Tech degree from Asansol Engineering College, where I achieved a good CGPA of 8.7. During my last semester, I had the opportunity to intern as a React.js developer at Step to Soft.</p>
                </> :
                <>
                  <p>Hi, I'm Md Faisal Raza Khan, and I work as a front-end developer using MERN technologies. I recently graduated in August 2023 with a B.Tech degree from Asansol Engineering College, where I achieved a good CGPA of 8.7. During my last semester, I had the opportunity to intern as a React.js developer at Step to Soft.</p>
                  <p>I have experience working on two MERN stack projects, and I've also started learning about backend development with Node.js. My goal for the future is to become a skilled full-stack developer.
                  </p>
                  <p>I'm really passionate about web development. I enjoy learning about JavaScript and find satisfaction in solving web development challenges.</p>
                </>
            }
          </div>
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
      </section>
    </>
  )
}

export default AboutMe