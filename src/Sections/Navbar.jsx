import React, { useState } from 'react'
import { MobNavLinks, navLinks } from '../Constants/Data'
import { close, menu } from '../assets'

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <>
      <nav className='navbar w-full flex justify-between items-center ss:py-0 py-3'>
        <h1 className=' py-0 text-gradient font-poppins font-semibold ss:text-[1.8rem] text-[1.8rem] ss:leading-[100px]'>
          irkFaisal &#60;/&#62;
        </h1>
        <ul className=' ms:flex hidden list-none justify-end items-center flex-1 '>
          {
            navLinks.map((item, index) => {
              return (
                <li key={item.id} className={` font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}>
                  <a className='' href={`#${item.id}`}>
                    {item.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <div className='ms:hidden flex flex-1 justify-end items-center cursor-pointer '>
          <img src={toggle ? close : menu} alt='menu' className='text-white' onClick={() => settoggle((prev) => (!prev))} />
        </div>
        {/* Navbar list in mobile toggle view */}
        <div className={`ms:hidden block sidebar ${toggle ? "flex" : "hidden"} p-6 bg-black-gradient rounded-xl absolute top-20 right-0 min-w-[8rem] mx-4 my-2 `} >
          <ul className=' flex flex-1 flex-col list-none justify-start items-center '>
            {
              MobNavLinks.map((item, index) => {
                return (
                  <li key={item.id} className={` font-poppins font-normal cursor-pointer text-white text-[1rem] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} `}>
                    <a className='' href={`#${item.id}`}>
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

{/* gradient start */ }
{/* <div className="absolute z-[0] w-[50%] h-[50%] top-10 pink__gradient" />
          <div className="absolute z-[1] w-[20%] h-[20%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[20%] h-[20%] right-20 bottom-20 blue__gradient" /> */}
{/* gradient end */ }