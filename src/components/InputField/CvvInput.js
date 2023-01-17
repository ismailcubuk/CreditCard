import React, { useContext } from 'react'
import CardContext from '../../context/CardContext'

function CvvInput(props) {
    const CVVInput = props.CVVInput;
    const { handleFlip, handleChangeCvv } = useContext(CardContext);

    return (
        <div className='card-form-cvv-item'>
            <div className='card-form-cvv'>
                <div className='card-form-cvv-name'>
                    CVV
                </div>
                <div className='card-form-cvv-input'>
                    <CVVInput
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="***"
                        onBlur={handleFlip}
                        onChange={handleChangeCvv}
                        onFocus={handleFlip}
                    />
                </div>
            </div>

        </div>
    )
}

export default CvvInput