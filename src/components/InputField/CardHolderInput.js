import React, { useContext } from 'react'
import CardContext from '../../context/CardContext'
import InputMask from "react-input-mask";
function CardHolderInput() {
    const { handleChangeHolder, handleInputFocusHolder } = useContext(CardContext)
    return (
        <div className='card-form-input'>
            <div className='card-form-name'>
                Card Holders
            </div>
            <InputMask maskPlaceholder="" placeholder='Full Name ' maxLength={23} onFocus={handleInputFocusHolder} onBlur={handleInputFocusHolder} onChange={handleChangeHolder} />
        </div>
    )
}

export default CardHolderInput