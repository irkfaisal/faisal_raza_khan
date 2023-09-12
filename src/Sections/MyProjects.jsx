import React from 'react'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import { projects } from '../Constants/Data'
import Button from '../Components/Button'
import Heading from '../Components/Heading'
import { useNavigate } from 'react-router-dom'

const MyProjects = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-[1rem]' id='Projects'>
        <Heading heading={"Projects"} />
        <div className='flex md:flex-row flex-col justify-center items-center md:gap-6 gap-3 px-auto' id="projectDiv">
          <ProjectCard projects={projects.slice(0, 3)} />
        </div>
        <div className='flex justify-center items-center' id='btnDiv'>
          <Button Btntitle={"See more..."} onClick={() => navigate(`/projects`)} />
        </div>
      </section>
    </>

  )
}

export default MyProjects