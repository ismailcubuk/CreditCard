import React, { useContext } from 'react'
import CardContext from '../../../context/CardContext'

function CardNumber() {
    const { focusedinput, cardNumber } = useContext(CardContext)

    return (
        <div className='card-item-number' style={focusedinput} >
            {cardNumber}
        </div>
    )
}

export default CardNumber