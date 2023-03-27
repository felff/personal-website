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
  return (
    <div className={Style.cotainer}>
        <span style={{transform:`rotateY(${1*45}deg) translateZ(300px)`}}><img src={Personal1.src}/></span>
        <span style={{transform:`rotateY(${2*45}deg) translateZ(300px)`}}><img src={Personal2.src}/></span>
        <span style={{transform:`rotateY(${3*45}deg) translateZ(300px)`}}><img src={Personal3.src}/></span>
        <span style={{transform:`rotateY(${4*45}deg) translateZ(300px)`}}><img src={Personal4.src}/></span>
        <span style={{transform:`rotateY(${5*45}deg) translateZ(300px)`}}><img src={Personal5.src}/></span>
        <span style={{transform:`rotateY(${6*45}deg) translateZ(300px)`}}><img src={Personal6.src}/></span>
        <span style={{transform:`rotateY(${7*45}deg) translateZ(300px)`}}><img src={Personal7.src}/></span>
        <span style={{transform:`rotateY(${8*45}deg) translateZ(300px)`}}><img src={Personal8.src}/></span>
    </div>
  )
}

export default gallery3D