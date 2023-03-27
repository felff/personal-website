import React from 'react'
import Style from '../styles/gallery3D.module.css'
import Personal1 from '../imgs/personal1.jpg'
import Personal2 from '../imgs/personal2.jpg'
import Personal3 from '../imgs/personal3.jpg'
import Personal4 from '../imgs/personal4.jpg'
import Personal5 from '../imgs/personal5.jpg'
import Personal6 from '../imgs/personal6.jpg'
import Personal7 from '../imgs/personal7.jpg'
import Personal8 from '../imgs/personal8.jpg'
const gallery3D = () => {
  const img_cotainer  = [Personal1,Personal2,Personal3,Personal4,Personal5,Personal6,Personal7,Personal8]
  return (
    <div className={Style.cotainer}>
      {
        img_cotainer.map((todo,i)=>{
          return <span style={{transform:`rotateY(${i*45}deg) translateZ(300px)`}}><img src={todo.src}/></span>
        })
      }
    </div>
  )
}

export default gallery3D