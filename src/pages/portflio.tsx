import React from 'react'
import Style from '../styles/portflio.module.css'
import { useTranslation } from "react-i18next";
import PortflioCard from '../components/portflioCard';
import project from '../project/project';

const Portflio = () => {
    const { t } = useTranslation();
    return (
        <div className={Style.container}>
            <div className={Style.title}>
                <div className={Style.top}>{t("Portflio_title")}</div>
                <div className={Style.bottom}>{t("Portflio_title")}</div>
            </div>
            <div className={Style.card}>
                {
                    project.map(el => {
                        return <div>
                            <PortflioCard
                                id={el.id}
                                img={el.img}
                                title={el.title}
                                text={el.text}
                                technology={el.technology}
                                vist={el.vist}
                                SOURCE={el.SOURCE} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Portflio
