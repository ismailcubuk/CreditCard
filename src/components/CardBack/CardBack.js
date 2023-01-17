import React, { useContext } from 'react'
import CardContext from '../../context/CardContext'
import visa from "../../pics/visa.png"

function CardBack() {
    const { cardCvv } = useContext(CardContext)
    return (
        <div className='card-back'>
            <div className='card-item-wrapper'>
                <div className='card-back-black-line'></div>
                <div className='card-back-item-cvv'>
                    <div className='card-back-cvv-tittle'>
                        CVV
                    </div>
                    <div className='card-back-cvv-band'>
                        {cardCvv}

                    </div>
                    <div className='card-back-card-type'>
                        <img src={visa} alt="card-type" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBack