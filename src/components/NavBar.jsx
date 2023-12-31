import React, { useState, useRef } from 'react'
import Logo from "../assets/icons/Logo.svg"
import LanguageSwitch from './LanguageSwitch'
import Hamburger from '../assets/icons/Hamburger.svg'
import { Outlet, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'





function NavBar({ scrollToHome, scrollToAbout, scrollToWhyUs, scrollToContact }) {




    const { t } = useTranslation()




    const [toggle, setToggle] = useState(false)



    const handleToggle = () => {
        setToggle(currentToggle => {
            return !currentToggle
        })


    }
    const handleLinkClick = () => {
        if (toggle) {
            handleToggle();
        }
    };





    return (
        <div className='w-full mx-auto bg-black z-[10] fixed'>
            <nav className='flex justify-between items-center w-[98%] mx-auto py-2 bg-black sticky  '>
                <div >
                    <img className='md:w-16 md:py-0 py-1 w-14  ' src={Logo} alt="58 Works" />

                </div>
                <div className={`-z-10 md:z-0  duration-500 absolute  min-h-[100vh] flex items-center justify-center left-0 md:min-h-0 w-full md:w-fit md:static bg-black ${toggle ? 'top-[100%]' : 'top-[-9999%]'} `}>
                    <ul className='flex  md:flex-row flex-col  items-center gap-3'>
                        <li><Link to="/" onClick={() => { scrollToHome(); handleLinkClick() }} className='md:bg-primary md:hover:bg-neutral text-[white] transition md:shadow-md px-5 py-2 md:rounded-full font-semibold'>{t('home')}</Link ></li>
                        <li><Link to="/" onClick={() => { scrollToAbout(); handleLinkClick() }} className='md:bg-primary md:hover:bg-neutral text-[white] transition md:shadow-md px-5 py-2 md:rounded-full font-semibold'>{t('aboutUs')}</Link ></li>
                        <li><Link to="/" onClick={() => { scrollToWhyUs(); handleLinkClick() }} className='md:bg-primary md:hover:bg-neutral text-[white] transition md:shadow-md px-5 py-2 md:rounded-full font-semibold'> {t('whyUs')} </Link ></li>
                        <li><Link to="/" onClick={() => { scrollToContact(); handleLinkClick() }} className='md:bg-primary md:hover:bg-neutral text-[white] transition md:shadow-md px-5 py-2 md:rounded-full font-semibold'>{t('contact')}</Link></li>
                        <li><Link to="/events" className='md:bg-primary md:hover:bg-neutral text-[white] transition md:shadow-md px-5 py-2 md:rounded-full font-semibold'>{t('events')}</Link ></li>

                    </ul>
                </div>
                <div className='flex'>
                    <LanguageSwitch />


                    <img className='cursor-pointer md:hidden' src={Hamburger} alt="menu" onClick={() => handleToggle()} />
                </div>



            </nav>
            <Outlet />






        </div>


    )
}

export default NavBar