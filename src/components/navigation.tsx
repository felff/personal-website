import React from 'react'
import Style from '../styles/navigation.module.css'
import Image from 'next/image'
import HOME from '../imgs/home.png'
import ABOUT from '../imgs/profile.png'
import PROFILE from '../imgs/books.png'
import { useTranslation } from "react-i18next";

interface navigationProp {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}
const navigation = ({ currentPage, setCurrentPage }: navigationProp) => {
    const { t } = useTranslation();
    return (
        <div className={Style.container}>
            <ul>
                <li
                    className={currentPage === "HOME" ? Style.list_active : Style.list}
                >
                    <a className={Style.btn}
                    onClick={() => {
                        setCurrentPage("HOME");
                      }}
                    >
                        <span className={Style.text}>{t("navigation_home")}</span>
                        <span className={Style.icon}>
                            <Image
                                src={HOME}
                                height={40}
                                width={40}
                                alt={"home"}
                            />
                        </span>
                    </a>
                </li>
                <li
                    className={currentPage === "ABOUT" ? Style.list_active : Style.list}
                >
                    <a className={Style.btn}
                    onClick={() => {
                        setCurrentPage("ABOUT");
                      }}
                    >
                        <span className={Style.text}>{t("navigation_about")}</span>
                        <span className={Style.icon}>
                            <Image
                                src={ABOUT}
                                height={40}
                                width={40}
                                alt={"about"}
                            />
                        </span>
                    </a>
                </li>
                <li
                    className={currentPage === "PORTFOLIO" ? Style.list_active : Style.list}
                >
                    <a className={Style.btn}
                    onClick={() => {
                        setCurrentPage("PORTFOLIO");
                      }}
                    >
                        <span className={Style.text}>{t("navigation_portgolio")}</span>
                        <span className={Style.icon}>
                            <Image
                                src={PROFILE}
                                height={40}
                                width={40}
                                alt={"portfolio"}
                            />
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default navigation