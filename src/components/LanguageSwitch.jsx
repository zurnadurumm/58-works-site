import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'


function LanguageSwitch() {

    const { i18n } = useTranslation()

    const [language, setLanguage] = useState('tr')

    const changeLanguage = (lng) => {
        setLanguage(lng)
        i18n.changeLanguage(lng)



    }









    return (
        <div className='w-auto flex gap-2 '>
            <button className={`dil-button ${language === 'tr' ? 'active' : ''}`} id='tr' onClick={() => { changeLanguage('tr') }} >tr</button>
            <button className={`dil-button ${language === 'en' ? 'active' : ''}`} id='en' onClick={() => { changeLanguage('en') }} >en</button>

        </div>
    )
}

export default LanguageSwitch