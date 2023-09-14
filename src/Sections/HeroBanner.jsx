import React, { useState, useEffect } from 'react'
import { socialMedia } from '../Constants/Data'
import styles from '../Styles'
import Button from '../Components/Button'

const HeroBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if the screen width is below a certain threshold ()
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 620);
    };

    // Initial check
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <section className='flex flex-col md:items-center items-start  h-[100vh]'>
        <h1 className='text-white  font-poppins font-semibold ss:text-[3.5rem] text-[2rem] ss:leading-[75px] '>
          Hi
        </h1>
        <h1 className='text-white  font-poppins font-semibold ss:text-[3.5rem] text-[2rem] ss:leading-[75px] '>
          This is
        </h1>
        <h1 className='text-white  font-poppins font-semibold ss:text-[3.5rem] text-[2rem] ss:leading-[75px]  text-gradient'>
          Md Faisal Raza Khan
        </h1>
        <h1 className='text-white  font-poppins font-semibold ss:text-[3.5rem] text-[2rem] ss:leading-[75px] '>
          A Front-End Developer
        </h1>
        <div className='flex flex-row justify-center items-center'>
          {
            socialMedia.map((item, index) => {
              return (
                <div key={item.id} className={` flex flex-row p-2 m-2 rounded-xl feature-card-bg cursor-pointer`}>
                  <a href={item.link} target='_blank'>
                    <div className={`w-[3.5rem] h-[3.5rem] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                      <img src={item.icon} alt="star" className="w-[50%] h-[50%] object-contain" />
                    </div>
                  </a>
                </div>
              )
            })

          }
        </div>
        <div className='flex justify-center md:items-center items-start py-2'>
          <a href='#Projects'>
            <Button Btntitle={"Projects"} />
          </a>
          <a href={isMobile ? '#Experience_' : '#Experience'}>
            <Button Btntitle={"Experience"} />
          </a>
        </div>
      </section>
    </>
  )
}

export default HeroBanner