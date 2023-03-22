import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Home from './home'
import Style from '../styles/index.module.css'
import CheckBox from '../components/checkBox'
import Image from 'next/image'
import '../i18n'
import { useTranslation } from 'react-i18next'


const index: NextPage = () => {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState("HOME");
  const [checked, setChacked] = useState(false);
  const changCurrentPage = () => {
    switch (currentPage) {
      case "HOME":
        return <Home setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  }

  useEffect(() => {
    if (!checked) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("zh");
    }
  }, [checked])
  return (
    <>
      <Head>
        <title>personal-website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Style.container}>
        {changCurrentPage()}
        <div className={Style.checkBox}>
          <span
            style={
              !checked ? {
                textShadow: "rgb(142, 152, 235) 0.1em 0.1em 0.2em",
                fontWeight: "bolder",
                color: "rgb(113, 209, 253)"
              } : {}
            }>EN</span>
          <CheckBox
            checked={checked}
            onClick={() => { setChacked(!checked) }}
          />
          <span
            style={
              checked ? {
                textShadow: "rgb(142, 152, 235) 0.1em 0.1em 0.2em",
                fontWeight: "bolder",
                color: "rgb(113, 209, 253)"
              } : {}
            }>中文</span>
        </div>
      </div>
    </>
  )
}
export default index;
