import NavBar from '../components/NavBar'
import { ReactComponent as NotFoundSvg } from '../assets/images/NotFound.svg'
import { useTranslation } from 'react-i18next'

function NotFound() {
    const {t} = useTranslation()
    return (
        <div>
            <NavBar />
            <div className="w-full h-screen flex flex-col items-center justify-center scale-75">
                
                    <NotFoundSvg />
                    <p className='font-extrabold text-primary text-3xl md:text-5xl lg:text-7xl text-center '>{t('notfound')}</p>
                
            </div>
        
        
        </div>
    )
}

export default NotFound