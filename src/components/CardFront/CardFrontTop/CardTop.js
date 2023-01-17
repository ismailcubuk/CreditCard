import React from 'react'
import visa from "../../../pics/visa.png"
import chip from "../../../pics/chip.png"

function CardTop() {
    return (
        <div className='card-item-top'>
            <img src={chip} alt="chip" />
            <div className='card-type'>
                <img src={visa} alt="card-type" />
            </div>
        </div>
    )
}

export default CardTop