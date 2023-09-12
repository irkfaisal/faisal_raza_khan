import React from 'react'
import './ProjectCard.css'
import Button from '../Button'
const ProjectCard = ({ projects }) => {

    return (
        <>
            {
                projects.map((item) => {
                    return (
                        <section id="projectCard" key={item.title} className=' text-white flex flex-col feature-card-bg w-[20rem] h-[28rem] rounded-xl  p-2 '>
                            <div className=' w-full h-[8.5rem]' id='image'>
                                <img src={item.image} alt='projectphoto' className='w-[100%] h-[100%] object-contain rounded-xl' />
                            </div>
                            <div className='w-full h-[2.5rem] text-center ' id='title'>
                                <h1 className='text-gradient font-poppins font-semibold ss:text-[1.5rem] text-[12px] ss:leading-[10px]  py-4 '>{item.title}</h1>
                            </div>
                            <div className='w-full h-[13rem] overflow-hidden' id='description'>
                                <p>{item.description}</p>
                            </div>
                            <div className='w-full h-[4rem] flex flex-row justify-between items-center ' id='buttons'>
                                <a href={item.githubLink}>
                                    <Button Btntitle={"Code"} />
                                </a>
                                <a href={item.liveLink}>
                                    <Button Btntitle={"View"} />
                                </a>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

export default ProjectCard