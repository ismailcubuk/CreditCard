import React, { useContext } from 'react'

import TextMask from 'react-text-mask';
import CardContext from '../context/CardContext';
import CardBack from './CardBack/CardBack';
import ExpirationDateInput from './InputField/ExpirationDateInput';
import CvvInput from './InputField/CvvInput';
import CardHolderInput from './InputField/CardHolderInput';
import CardNumberInput from './InputField/CardNumberInput';
import CardFront from './CardFront/CardFront';
const CVVInput = (props) => {
    return (
        <TextMask
            {...props}
            mask={[/\d/, /\d/, /\d/]}
            placeholderChar={'*'}
        />
    );
};
const NumberInput = (props) => {
    return (
        <TextMask
            {...props}
            mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'#'}
        />
    );
};


function Card() {
    const { active } = useContext(CardContext)
    return (
        <div className='body'>
            <div className='card-form'>
                <div className='card-list'>
                    <div className='card-item'>
                        <div className='flip-card'>
                            <div className='flip-card-inner' style={{ transform: active ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                                {/* CARD FRONT */}
                                <CardFront />
                                {/* CARD BACK */}
                                <CardBack />
                            </div>
                        </div>
                    </div>
                </div>
                {/* İNPUT AREA */}
                <div className='card-form-input-area'>
                    <CardNumberInput NumberInput={NumberInput} />
                    <CardHolderInput />
                    <div className='card-form-bottom'>
                        <ExpirationDateInput />
                        <CvvInput CVVInput={CVVInput} />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card