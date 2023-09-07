import React from 'react'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import { projects } from '../Constants/Data'
import Button from '../Components/Button'
import Heading from '../Components/Heading'

const MyProjects = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-[1rem]' id='Projects'>
        <Heading heading={"Projects"} />
        <div className='flex sm:flex-row flex-col justify-center items-center px-auto' id="projectDiv">
          <ProjectCard projects={projects} />
        </div>
        <div className='flex justify-center items-center' id='btnDiv'>
          <Button Btntitle={"See more..."} />
        </div>
      </section>
    </>

  )
}

export default MyProjects