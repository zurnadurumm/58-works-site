import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-black py-2 w-full h-fit text-white text-xs flex flex-col items-center justify-center'>
            <p>&copy; 2023 58 Works&trade; Production. All Rights Reserved.</p>
            <div className='flex '>
                <Link to='/privacy' className='transition-colors hover:text-primary  border-solid border-white border-r-2 pr-1'>Privacy Policy</Link>
                <Link to='/terms' className='transition-colors hover:text-primary pl-1'>Terms of Service</Link>



            </div>

        </div>
    )
}

export default Footer