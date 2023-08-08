import React, { useState } from 'react'
import Hamburger from '../assets/icons/Hamburger.svg'


function LanguageSwitch() {
    const [language, setLanguage] = useState('tr')

    const changeLanguage = (newLang) => {
        setLanguage(newLang.target.innerText)


    }









    return (
        <div className='w-auto flex gap-2 '>
            <button className={`dil-button ${language === 'tr' ? 'active' : ''}`} id='tr' onClick={changeLanguage} >tr</button>
            <button className={`dil-button ${language === 'en' ? 'active' : ''}`} id='en' onClick={changeLanguage} >en</button>

        </div>
    )
}

export default LanguageSwitch