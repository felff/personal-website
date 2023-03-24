import React from 'react'
import Style from '../styles/home.module.css'
import SELFIE from '../imgs/selfie.jpg'

interface homeProp {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}
const home = ({ setCurrentPage }: homeProp) => {
    return (
        <div className={Style.bg}>
            <div className={Style.color}></div>
            <div className={Style.color}></div>
            <div className={Style.color}></div>
            <div className={Style.container}>
                <div className={Style.selfie}>
                    <img
                        src={SELFIE.src}
                        alt="selfie"
                        className={Style.img}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <div className={Style.about}>
                <h1 className={Style.name}>
                    <span>F</span>
                    <span>r</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>-</span>
                    <span>E</span>
                    <span>n</span>
                    <span>d</span>
                    <span> </span>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                    <span> </span>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                </h1>
            </div>
        </div>
    )
}

export default home
