import React from 'react'
import Button from '../Components/Button'
import { shareLink } from '../assets'
import styles from '../Styles'

const Resume = () => {
    const share = () => {
        let shareData = {
            title: 'Share my profile',
            text: 'Checkout Faisal Portfolio',
            url: 'https://www.linkedin.com/in/irkfaisal/',
        }
        const justShare = document.getElementById('shareApi');

        justShare.addEventListener('click', () => {
            navigator.share(shareData)
                .then(() =>
                    // alert("shared successfully")
                    console.log("shared successfully")
                )
                .catch((e) =>
                    console.log("browser problem")
                )
        });
    }
    return (
        <>
            <section className='feature-card-bg w-full  rounded-xl flex justify-center   items-center feature'>
                <Button Btntitle={"Download My CV"} />
                <div className={` flex flex-row p-2 my-5 rounded-xl feature-card-bg cursor-pointer`}>
                    <div id="shareApi" className={`w-[1.5rem] h-[1.5rem] rounded-full ${styles.flexCenter} bg-dimBlue`} onClick={() => share()}>
                        <img src={shareLink} alt="star" className="w-[100%] h-[100%] object-contain" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume