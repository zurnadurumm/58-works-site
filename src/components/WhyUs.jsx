import React from 'react'


function WhyUs() {

    return (
        <div id='whyus' className='bg-neutral   w-full h-fit mx-auto py-12 grid grid-cols-[auto] md:grid-cols-[auto_auto] items-center justify-center gap-4 '>
            <button className='btn local-mod'>
                Local Modding

            </button>
            <button className='btn save-edit'>Save Edits</button>
            <button className='btn convoys'>Convoys</button>
            <button className='btn other-games'>Other Games</button>

        </div>
    )
}

export default WhyUs