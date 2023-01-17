import React, { useContext } from 'react'
import CardContext from '../../../context/CardContext'
function CardHolder() {
    const { focusedinputHolder, cardHolder } = useContext(CardContext)
    return (
        <div className='card-name'>
            <div className='card-item-holder'>
                Card Holder
            </div>
            <div className='card-item-name' style={focusedinputHolder}>
                {cardHolder}
            </div>
        </div>
    )
}

export default CardHolder


