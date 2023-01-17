import React, { useContext } from 'react'
import CardContext from '../../context/CardContext'

function CardNumberInput(props) {
    const NumberInput = props.NumberInput
    const { handleInputFocus, handleChangeNumber } = useContext(CardContext)
    return (
        <div className='card-form-input'>
            <div className='card-form-name'>
                Card Number
            </div>
            <NumberInput
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputFocus}
                onChange={handleChangeNumber}
                placeholder="#### #### #### ####"
            />
        </div>
    )
}

export default CardNumberInput