import React from 'react'
import Logo from '../assets/icon-oil.svg'

export default function Navbar(){
    return(
        <div className="flex justify-center items-center w-full">
            <nav class="fixed top-0 z-50 w-full px-11 bg-gray-800 border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <a href='/'>
                            <button className='flex items-center justify-start'>
                            {/* <img src={Logo} class="h-8 mx-3" alt="FlowBite Logo" /> */}
                            <h3 className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white'>
                                Oil Spill Detection
                            </h3>
                            </button>
                        </a>
                        <div className='flex items-center justify-end'>
                            <button className='self-center font-medium sm:text-lg text-gray-100 hover:text-gray-300 ml-12'>
                                Home
                            </button>
                            <button className='self-center font-medium sm:text-lg text-gray-100 hover:text-gray-300 ml-12'>
                                Live Tracking
                            </button>
                            <button className='self-center font-medium sm:text-lg text-gray-100 hover:text-gray-300 ml-12'>
                                Segmentation
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}