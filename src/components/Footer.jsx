import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation()
    return (
        <div className='bg-black py-2 w-full h-fit text-white text-xs flex flex-col items-center justify-center'>
            <p>{t('footerText')}</p>
            <div className='flex '>
                <Link to='/privacy' className='transition-colors hover:text-primary  border-solid border-white border-r-2 pr-1'>{t('privacyPolicy')}</Link>
                <Link to='/terms' className='transition-colors hover:text-primary pl-1'>{t('termsAndConditions')}</Link>
                <a href='https://github.com/zurnadurumm/58-works-site' target='_blank' className='pl-1'> v1.5</a>



            </div>

        </div>
    )
}

export default Footer