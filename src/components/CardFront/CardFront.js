import React from 'react'
import CardExpires from './CardFrontBottom/CardExpires'
import CardHolder from './CardFrontBottom/CardHolder'
import CardNumber from './CardFrontTop/CardNumber'
import CardTop from './CardFrontTop/CardTop'

function CardFront() {
    return (
        <div className='card-front' >
            <div className='card-item-wrapper'>
                <CardTop />
                <CardNumber />
                <div className='card-item-bot'>
                    <CardHolder />
                    <CardExpires />
                </div>
            </div>
        </div>
    )
}

export default CardFront