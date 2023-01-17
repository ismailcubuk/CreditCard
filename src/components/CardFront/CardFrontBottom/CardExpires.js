import React, { useContext } from 'react'
import CardContext from '../../../context/CardContext'
function CardExpires() {
    const { cardYear, cardMonth, focusedinputDate } = useContext(CardContext)
    return (
        <div className='card-item-date' style={focusedinputDate}>
            <div className='card-date-title'>
                Expires
            </div>
            <div className='card-date'>
                {cardMonth}/{cardYear}
            </div>
        </div>
    )
}

export default CardExpires