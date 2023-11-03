import React from 'react'
import Logo from '../assets/icon-oil.svg'

export default function Dashboard (){
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <img src={Logo} class="h-8 mx-3" alt="FlowBite Logo" />
                        <h3 className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                        Oil Spill Detection
                        </h3>
                    </div>
                    </div>
                </div>
                </nav>

                <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                        <div class="flex justify-center items-center w-70 h-[350px] relative border-2 border-gray-300 border-dashed rounded-lg py-12" id="dropzone">
                            <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50" />
                            <div class="text-center">
                                {/* <svg class="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/> */}
                                <svg class="mx-auto h-12 w-12 fill-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"/>
                                    </g>
                                </svg>
                                <h3 class="mt-2 text-sm font-medium text-gray-300">
                                    <label for="file-upload" class="relative cursor-pointer">
                                        <span>Drag and drop</span>
                                        <span class="text-indigo-500"> or browse </span>
                                        <span>to upload</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                                    </label>
                                </h3>
                                <p class="mt-1 text-xs text-gray-400">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>

                            {/* <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview"/> */}
                        </div>
                        </li>
                        <li>
                            <div className='flex justify-center items-center mt-3'>
                                <button type="button" class="w-[300px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">Process</button>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                </aside>

                <div class="p-4 ml-[350px] mr-[40px] mt-[450px] w-full">
                <h1 className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-black'>
                    Oil Spill Detection's Steps
                </h1>
                <ul class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                    data-te-stepper-init
                    data-te-stepper-type="vertical">
                    {/* <!--First item--> */}
                    <li
                        data-te-stepper-step-ref
                        class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                        <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-gray-200">
                        <span
                            data-te-stepper-head-icon-ref
                            class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            1
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            class="text-gray-700 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-gray-700 font-medium">
                            Uploading Image
                        </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div>
                                <button type="button" class="mt-5 w-[120px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                                </div>
                        </div>
                        
                    </li>
                    <li
                        data-te-stepper-step-ref
                        class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                        <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-gray-200">
                        <span
                            data-te-stepper-head-icon-ref
                            class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            2
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            class="text-neutral-700 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-700 font-medium">
                            Uploading Image
                        </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div>
                                <button type="button" class="mt-5 w-[120px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                                </div>
                        </div>
                    </li>
                    <li
                        data-te-stepper-step-ref
                        class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                        <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-gray-200">
                        <span
                            data-te-stepper-head-icon-ref
                            class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            3
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            class="text-neutral-700 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-700 font-medium">
                            Uploading Image
                        </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div>
                                <button type="button" class="mt-5 w-[120px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                                </div>
                        </div>
                    </li>
                    <li
                        data-te-stepper-step-ref
                        class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                        <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-gray-200">
                        <span
                            data-te-stepper-head-icon-ref
                            class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            4
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            class="text-neutral-700 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-700 font-medium">
                            Uploading Image
                        </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div>
                                <button type="button" class="mt-5 w-[120px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                                </div>
                        </div>
                    </li>
                    <li data-te-stepper-step-ref class="relative h-fit">
                        <div
                        data-te-stepper-head-ref
                        class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-gray-200">
                        <span
                            data-te-stepper-head-icon-ref
                            class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                            5
                        </span>
                        <span
                            data-te-stepper-head-text-ref
                            class="text-neutral-700 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-700 font-medium">
                            Uploading Image
                        </span>
                        </div>
                        <div
                            data-te-stepper-content-ref
                            class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                <div>
                                <button type="button" class="mt-5 w-[120px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                                </div>
                        </div>
                    </li>
                    {/* <li className='mt-5'>
                    <div className="h-full border-2 border-gray-400 rounded-lg flex">
                        <input type="checkbox" className="mx-6 accent-yellow"/> 
                        <div className='flex item-center justify-between w-full'>
                        <div className="items-center flex-col ml-3 mt-2 justify-between">
                            <div className='my-2'>
                            <div className="font-medium item-center justify-center">
                                Uploading image
                            </div>
                            <div className="font-regular text-sm item-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" class="place-self-center mr-6 w-[100px] h-[40px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='mt-3'>
                    <div className="h-full border-2 border-gray-400 rounded-lg flex">
                        <input type="checkbox" className="mx-6 accent-yellow"/> 
                        <div className='flex item-center justify-between w-full'>
                        <div className="items-center flex-col ml-3 mt-2 justify-between">
                            <div className='my-2'>
                            <div className="font-medium item-center justify-center">
                                Uploading image
                            </div>
                            <div className="font-regular text-sm item-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" class="place-self-center mr-6 w-[100px] h-[40px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='mt-3'>
                    <div className="h-full border-2 border-gray-400 rounded-lg flex">
                        <input type="checkbox" className="mx-6 accent-yellow"/> 
                        <div className='flex item-center justify-between w-full'>
                        <div className="items-center flex-col ml-3 mt-2 justify-between">
                            <div className='my-2'>
                            <div className="font-medium item-center justify-center">
                                Uploading image
                            </div>
                            <div className="font-regular text-sm item-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" class="place-self-center mr-6 w-[100px] h-[40px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='mt-3'>
                    <div className="h-full border-2 border-gray-400 rounded-lg flex">
                        <input type="checkbox" className="mx-6 accent-yellow"/> 
                        <div className='flex item-center justify-between w-full'>
                        <div className="items-center flex-col ml-3 mt-2 justify-between">
                            <div className='my-2'>
                            <div className="font-medium item-center justify-center">
                                Uploading image
                            </div>
                            <div className="font-regular text-sm item-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" class="place-self-center mr-6 w-[100px] h-[40px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                            </div>
                        </div>
                    </div>
                    </li>
                    <li className='mt-3'>
                    <div className="h-full border-2 border-gray-400 rounded-lg flex">
                        <input type="checkbox" className="mx-6 accent-yellow"/> 
                        <div className='flex item-center justify-between w-full'>
                        <div className="items-center flex-col ml-3 mt-2 justify-between">
                            <div className='my-2'>
                            <div className="font-medium item-center justify-center">
                                Uploading image
                            </div>
                            <div className="font-regular text-sm item-center mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <button type="button" class="place-self-center mr-6 w-[100px] h-[40px] text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800">View</button>
                            </div>
                        </div>
                    </div>
                    </li> */}
                </ul>
                </div>

        </div>
    )
}