import React from 'react'
import Style from '../styles/portflioCard.module.css'
import ESG from '../imgs/ESG_ManagementSystem.png'

interface PortflioCardPop {
  id: string;
  img: string;
  title: string;
  text: string;
  technology: string;
  vist?: string;
  SOURCE?: string;
}
function PortflioCard({
  img,
  title,
  text,
  id,
  technology,
  SOURCE,
  vist
}: PortflioCardPop) {
  return (
    <div className={Style.card}>
      <div className={Style.content}>
        <div className={Style.img}>
          <img src={img}
            width='100%' />
        </div>
        <div className={Style.text}>
          <h1>{id}</h1>
          <h2>{title}</h2>
          <h4>{text}</h4>
          <p>{technology}</p>
        </div>
        <div className={Style.footer}>
          {
            SOURCE && (
              <a href={SOURCE} target="_blank" rel="noreferrer">SOURCE CODE</a>
            )
          }
          {
            vist && (
              <a href={vist} target="_blank" rel="noreferrer">VIST</a>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PortflioCard