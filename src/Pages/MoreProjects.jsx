import React, { useState } from 'react'
import Loader from '../Components/Loader'
import Heading from '../Components/Heading'
import { left_arrow } from '../assets'
import Styles from '../Styles'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import { projects } from '../Constants/Data'
import { useNavigate } from 'react-router-dom'

const MoreProjects = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 500);
    return (
        <>
            {
                loading ? <>
                    <div className={`${Styles.padding} flex ${Styles.divWidth}`} >
                        <div className={` p-[10rem] ${Styles.fullWidthHieight} feature-card-bg rounded-xl  flex justify-center `}>
                            <Loader />
                        </div>
                    </div>
                </>
                    :
                    <>
                        <section className={` min-h-[100vh] bg-primary gap-5 `}>
                            <div>
                                <div id="arrUp" className={` ml-[auto]  cursor-pointer w-[3.5rem] h-[3.5rem] rounded-full ${Styles.flexCenter} bg-dimBlue`}
                                    onClick={() => navigate(-1)}>
                                    <img src={left_arrow} alt="star" className="w-[70%] h-[70%] object-contain" />
                                </div>
                                <Heading heading={"Projects"} />
                                <div className='flex justify-center items-center ss:flex-row flex-col gap-5'>
                                    <ProjectCard projects={projects.slice(3)} />
                                </div>
                            </div>
                        </section>
                    </>
            }
        </>
    )
}

export default MoreProjects