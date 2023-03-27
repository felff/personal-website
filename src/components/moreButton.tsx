import React from 'react'
import Style from '../styles/moreButton.module.css'

interface moreButton {
    text: string;
    onClick?: () => void;
}
const moreButton = ({ text, onClick }: moreButton) => {
    return (
        <a className={Style.more} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text}
        </a>
    )
}

export default moreButton