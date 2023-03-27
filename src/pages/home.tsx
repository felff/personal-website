import React from 'react'
import Style from '../styles/home.module.css'
import SELFIE from '../imgs/selfie.jpg'
import { useTranslation } from "react-i18next";
import MoreButton from "../components/moreButton"
interface homeProp {
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}
const Home = ({ setCurrentPage }: homeProp) => {
    const { t } = useTranslation();
    let title = t("home_title").split('')
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
                <h1>
                    {
                        title.map((char, i) => {
                            return <span key={i}>{char}</span>
                        })
                    }
                </h1>
                <h2>{t("home_name")}</h2>
                <p>{t("home_content")}</p>
                <div className={Style.btn}>
                    <MoreButton text={t("more_btn_text")} onClick ={()=>setCurrentPage("ABOUT")} />
                </div>
            </div>
        </div>
    )
}

export default Home
