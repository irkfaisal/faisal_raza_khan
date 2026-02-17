import React from 'react'
import Button from '../Components/Button'
import { shareLink } from '../assets'
import styles from '../Styles'
import { resume } from '../assets'

const Resume = () => {


    // To share website link
    const handleShareClick = async () => {
        try {
            await navigator.share({
                title: 'Share Example',
                text: 'Check out my portpolio',
                url: 'https://irkfaisal.github.io/faisal_raza_khan/',
            });
            console.log('Sharing successful');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };
    return (
        <>
            <section className='feature-card-bg w-full  rounded-xl flex justify-center items-center feature' id="Resume">
                <a href="https://drive.google.com/file/d/1YozGTDoASw4Hqx-xYmMA5XRjHaaV0Ums/view?usp=sharing" target="_blank" rel="noreferrer">
                    <Button Btntitle={"Download My CV"} />
                </a>
                <div className={` flex flex-row p-2 my-5 rounded-xl feature-card-bg cursor-pointer`}>
                    <div id="shareApi" className={`w-[1.5rem] h-[1.5rem] rounded-full ${styles.flexCenter} bg-dimBlue`} onClick={() => handleShareClick()}>
                        <img src={shareLink} alt="star" className="w-[100%] h-[100%] object-contain" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume