import React, { createContext, useState } from "react";

const CardContext = createContext();

export const CardContextprovider = ({ children }) => {
    // CARD NUMBER +
    const [cardNumber, setCardNumber] = useState("#### #### #### ####")
    const [inputActive, setInputActive] = useState(false)
    const focusedinput = {
        border: inputActive ? " 2px solid white" : "",
        borderRadius: "15px",
        backgroundColor: inputActive ? "rgba(0, 0, 0, 0.5)" : "",
    }
    const handleInputFocus = () => {
        setInputActive(!inputActive)
    }
    // CARD NUMBER -

    // CARD HOLDER +
    const [cardHolder, setCardHolder] = useState("FULL NAME")
    const [inputActiveHolder, setInputActiveHolder] = useState(false)
    const focusedinputHolder = {
        border: inputActiveHolder ? " 2px solid white" : "",
        borderRadius: "15px",
        backgroundColor: inputActiveHolder ? "rgba(0, 0, 0, 0.5)" : "",
    }
    const handleInputFocusHolder = () => {
        setInputActiveHolder(!inputActiveHolder)
    }
    // CARD HOLDER -

    // EXPİRATİON DATE +
    const [cardMonth, setCardMonth] = useState("MM")
    const [cardYear, setCardYear] = useState("YY")
    const [inputActiveExpires, setInputActiveExpires] = useState(false)
    const focusedinputDate = {
        border: inputActiveExpires ? " 2px solid white" : "",
        borderRadius: "15px",
        backgroundColor: inputActiveExpires ? "rgba(0, 0, 0, 0.5)" : "",
    }
    const handleInputFocusExpires = () => {
        setInputActiveExpires(!inputActiveExpires)
    }
    // EXPİRATİON DATE -

    // CARD CVV +
    const [cardCvv, setCardCvv] = useState("***")
    // CARD CVV -

    // MONTHS MAPPED+
    const months = ["Month"];
    for (let i = 1; i < 13; i++) {
        months.push(i);
    }
    const mappedMonth = months.map((month) => {
        return <option disabled={month === "Month"} selected={month[0]} className='input-option' value={month} key={month}>
            {month}
        </option>
    })
    // MONTHS MAPPED-

    // YEARS MAPPED +
    const years = ["Year"];
    for (let i = 2023; i < 2034; i++) {
        years.push(i);
    }
    const mappedYear = years.map((year) => {
        return <option disabled={year === "Year"} selected={year[0]} className='input-option' value={year} key={year}>
            {year}
        </option>
    })
    // YEARS MAPPED -

    // CARD FLİP +
    const [active, setActive] = useState(false)
    const handleFlip = () => {
        setActive(!active);
    };
    // CARD FLİP -

    // handle select +
    const handleSelectYear = (e) => {
        setCardYear(e.target.value)
    }
    const handleSelectMonth = (e) => {
        setCardMonth(e.target.value)
    }
    const handleChangeHolder = (e) => {
        setCardHolder(e.target.value)
    }
    const handleChangeNumber = (e) => {
        let input = e.target.value;
        let spacedInput = input.replace(/(\d{4})/g, '$1 ');
        setCardNumber(spacedInput);
    }
    const handleChangeCvv = (e) => {
        setCardCvv(e.target.value)
    }
    // handle select -


    const data = {
        handleInputFocus,
        setCardNumber,
        handleInputFocusHolder,
        setCardHolder,
        handleInputFocusExpires,
        setCardMonth,
        setCardYear,
        setCardCvv,
        mappedMonth,
        mappedYear,
        handleFlip,
        active,
        handleSelectYear,
        handleSelectMonth,
        handleChangeHolder,
        handleChangeNumber,
        handleChangeCvv,
        // card number
        cardNumber,
        focusedinput,
        // card holder
        cardHolder,
        focusedinputHolder,
        // card expires
        cardMonth,
        cardYear,
        focusedinputDate,
        // card cvv
        cardCvv,


    }

    return <CardContext.Provider value={data}>
        {children}
    </CardContext.Provider>
}

export default CardContext;

