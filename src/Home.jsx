import React from 'react'
import Styles from './Styles'
import { Navbar, HeroBanner, MyProjects, MyExperience, AboutMe, Footer, Skills, Resume } from './Sections'


const Home = () => {
    return (
        <>
            <div className=' bg-primary  w-full overflow-hidden flex flex-col justify-center  gap-[3rem] '>
                {/* Navbar */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <Navbar />
                    </div>
                </div>
                {/* HeroBanner */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <HeroBanner />
                    </div>
                </div>
                {/* MyProjects */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <MyProjects />
                    </div>
                </div>
                {/* Skills */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <Skills />
                    </div>
                </div>
                {/* Resume Download */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <Resume />
                    </div>
                </div>
                {/* MyExperience */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <MyExperience />
                    </div>
                </div>
                {/* AboutMe */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <AboutMe />
                    </div>
                </div>
                {/* Footer */}
                <div className={`${Styles.paddingX}  ${Styles.flexCenter} `} >
                    <div className={`${Styles.boxWidth}`} >
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home