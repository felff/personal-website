import React from 'react'
import Style from '../styles/checkBox.module.css'

interface checkBoxProp {
    ischecked: boolean,
    onClick?: () => void
}
const checkBox = ({ ischecked, onClick }: checkBoxProp) => {
    return (
        <div className={Style.container}>
            <input type="checkbox" checked={ischecked} onClick={onClick} readOnly/>
            <span></span>
        </div>
    )
}

export default checkBox