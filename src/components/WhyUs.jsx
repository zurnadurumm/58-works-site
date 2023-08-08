import React from 'react'
import { useTranslation } from 'react-i18next'



function WhyUs() {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col items-center bg-neutral  justify-center'>
            <h1 className='font-semibold text-white pt-12 text-3xl md:text-5xl lg:text-7xl'>{t('whyUs')}</h1>
            <div id='whyus' className='bg-neutral   w-full h-fit mx-auto py-12 grid grid-cols-[auto] md:grid-cols-[auto_auto] items-center justify-center gap-4 '>
                <button className='btn local-mod'>{t('localModding')} </button>
                <button className='btn save-edit'>{t('saveEdit')} </button>
                <button className='btn convoys'>{t('convoys')}</button>
                <button className='btn other-games'>{t('otherGames')}</button>

            </div>
        </div>
    )
}

export default WhyUs