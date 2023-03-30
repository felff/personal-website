import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Home from './home'
import About from './about'
import Portflio from './portflio'
import Style from '../styles/index.module.css'
import CheckBox from '../components/checkBox'
import Navigation from '../components/navigation'
import '../i18n'
import { useTranslation } from 'react-i18next'
// import Demo from './demo'


const Index: NextPage = () => {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState("HOME");
  const [ischecked, setChacked] = useState(false);
  const changCurrentPage = () => {
    switch (currentPage) {
      case "HOME":
        return <Home setCurrentPage={setCurrentPage} />;
      case "ABOUT":
        return <About />;
      case "PORTFOLIO":
        return <Portflio/>
      // case "DEMO":
      //   return <Demo/>
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  }

  useEffect(() => {
    if (!ischecked) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("zh");
    }
  }, [ischecked])
  return (
    <>
      <Head>
        <title>personal-website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet" />
      </Head>
      <div className={Style.container}>
        {changCurrentPage()}
        <div className={Style.checkBox}>
          <span
            style={
              !ischecked ? {
                textShadow: "rgb(142, 152, 235) 0.1em 0.1em 0.2em",
                fontWeight: "bolder",
                color: "rgb(113, 209, 253)"
              } : {}
            }>EN</span>
          <CheckBox
            ischecked={ischecked}
            onClick={() => { setChacked(!ischecked) }}
          />
          <span
            style={
              ischecked ? {
                textShadow: "rgb(142, 152, 235) 0.1em 0.1em 0.2em",
                fontWeight: "bolder",
                color: "rgb(113, 209, 253)"
              } : {}
            }>中文</span>
        </div>
        <div className={Style.navigation}>
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  )
}
export default Index;
