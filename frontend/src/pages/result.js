import {React, useState} from 'react'
import Navbar from '../component/navbar'
import Example1 from '../assets/example1.jpg'

export default function Result (){
    const [isOpen, setOpen] = useState(false);
    const handleDropDown = () => {
        setOpen(!isOpen);
    };
    return(
        <div className='justify-center items-center w-full h-full'>
            <Navbar/>
            <div className='mt-[60px] px-[50px]'>
            <button
                    id="dropdownRadioButton"
                    data-dropdown-toggle="dropdownDefaultRadio"
                    class="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800"
                    type="button"
                    onClick={handleDropDown}
                    
                    >
                        Dropdown radio
                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

                <div id="dropdownDefaultRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>

            <div className='grid grid-cols-2 grid-flow-col px-[50px]'>
                <div className='justify-center items-center mt-5 pr-[30px]'>      
                    <div className='flex justify-center items-center w-full h-[550px] bg-gray-100 p-5 rounded-lg'>
                <img src={Example1} class="h-[500px] w-[620px]" alt="" />
                </div>
                </div>

                <div className='grid justify-center items-center mt-3 pl-[30px]'>
                <div className='flex justify-center items-center w-full h-[550px] bg-gray-100 p-5 rounded-lg mt-2'>
                    <img src={Example1} class="h-[500px] w-[620px]" alt="" />
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <button type="button" class="w-[200px] text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-teal-800">More Info</button>
                </div>
                </div>
            </div>
            
        </div>
        
    )
}