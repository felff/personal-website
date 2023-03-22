import React from 'react'
import Style from '../styles/checkBox.module.css'

interface checkBoxProp {
    checked: boolean,
    onClick?: () => void
}
const checkBox = ({ checked, onClick }: checkBoxProp) => {
    return (
        <div className={Style.container}>
            <input type="checkbox" checked={checked} onClick={onClick} />
            <span></span>
        </div>
    )
}

export default checkBox