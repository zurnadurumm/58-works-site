import React from 'react'

function Landing(props, ref) {
    return (
        <div ref={ref} id='home' className='w-full h-full shadow-inner overflow-hidden bg-landing text-center '>
            <div className='w-screen  h-screen backdrop-blur -z-[-1] pt-12 flex items-center justify-center flex-col '>
                <h1 className='drop-shadow-lg font-semibold leading-none lg:text-10xl md:text-8xl text-6xl text-[white] '>58 Works&trade;</h1>
                <h2 className='drop-shadow-lg font-semibold lg:text-7xl md:text-5xl text-3xl leading-none text-[white]'>Productions</h2>
                <h3 className='drop-shadow-lg font-semibold lg:text-4xl md:3xl text-xl leading-none text-white'>The Unreachable Peak!</h3>
            </div>



        </div>
    )
}

export default React.forwardRef(Landing)