import React, { useContext } from 'react'
import CardContext from '../../context/CardContext'

function ExpirationDateInput() {
    const { handleSelectMonth, handleInputFocusExpires, handleSelectYear, mappedYear, mappedMonth } = useContext(CardContext)
    return (
        <div className='card-form-date-item'>
            <div className='card-form-date'>
                <div className='card-form-name'>
                    Expiration Date
                </div>
                <div className='card-form-ym-input'>
                    <div className='card-form-month-input'>
                        <select onChange={handleSelectMonth} onFocus={handleInputFocusExpires} onBlur={handleInputFocusExpires} >
                            {mappedMonth}
                        </select>
                    </div>
                    <div className='card-form-year-input'>
                        <select onChange={handleSelectYear} onFocus={handleInputFocusExpires} onBlur={handleInputFocusExpires} >
                            {mappedYear}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpirationDateInput