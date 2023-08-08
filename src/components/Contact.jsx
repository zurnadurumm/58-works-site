import React from 'react'
import Discord from '../assets/icons/Discord.png'
import Instagram from '../assets/icons/Instagram.png'
import Twitch from '../assets/icons/Twitch.png'
import Tmp from '../assets/icons/Truck.png'
import { useTranslation } from 'react-i18next'



function Contact() {
    const { t } = useTranslation()
    return (
        <div id='contact' className='w-full h-fit bg-white '>
            <div className='w-[90%] md:w-[80%] lg:w-[75%] py-16 mx-auto h-full flex flex-col gap-24 justify-center items-center'>
                <h1 className='text-primary text-4xl font-semibold  md:text-6xl lg:text-8xl'>{t('contactHeading')} </h1>

                <div className=' contact-grid gap-5 lg:gap-16  bg-white '>
                    <a href="https://discord.com/invite/4EXB2trxVA" target='_blank'>
                        <div className='brd ' >
                            <img className='img' src={Discord} alt="Discord" />
                            <h4>Discord</h4>

                        </div>
                    </a>
                    <a href="https://www.twitch.tv/delisivaslii58" target='_blank'>
                        <div className='brd ' >
                            <img className='img' src={Twitch} alt="Twitch" />
                            <h4>Twitch</h4>

                        </div>
                    </a>
                    <a href="https://www.instagram.com/58.works/" target='_blank'>
                        <div className='brd ' >
                            <img className='img' src={Instagram} alt="Instagram" />
                            <h4>Instagram</h4>

                        </div>
                    </a>
                    <a href="https://truckersmp.com/vtc/29008" target='_blank'>
                        <div className='brd ' >
                            <img className='img' src={Tmp} alt="TMP" />
                            <h4>Truckers MP</h4>

                        </div>
                    </a>

                </div>
            </div>
        </div>

    )
}

export default Contact