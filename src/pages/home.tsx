import React from 'react'
import  Style  from '../styles/home.module.css'

interface homeProp {
    setCurrentPage:React.Dispatch<React.SetStateAction<string>>
}
const home = ({ setCurrentPage }: homeProp) => {
    return (
        <div className={Style.container}>

        </div>
    )
}

export default home
