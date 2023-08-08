
import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <div id='aboutus' className='bg-white w-full h-full'>
            <div className=' gap-5 lg:gap-7 w-[90%] md:w-[80%] lg:w-[60%] mx-auto h-full flex flex-col text-center items-center justify-center'>
                <h1 className='font-semibold text-neutral text-3xl md:text-5xl lg:text-7xl'>{t('aboutUs')}</h1>
                <p className='font-semibold text-black text-sm md:text-base lg:text-xl'> {t('aboutUsText1')} </p>
                <p className='font-semibold text-black text-sm md:text-base lg:text-xl'>{t('aboutUsText2')}</p>
                <p className='font-semibold text-black text-sm md:text-base lg:text-xl'>{t('aboutUsText3')}</p>

            </div>
        </div>

    )
}

export default AboutUs