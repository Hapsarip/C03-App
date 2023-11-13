import React from 'react'
import Navbar from '../component/navbar'
import imageCard from '../component/imageCard'
import Cluster0 from '../assets/contoh-cluster0.jpg'
import Cluster1 from '../assets/contoh-cluster1.jpg'
import Cluster2 from '../assets/contoh-cluster2.jpg'
import Cluster3 from '../assets/contoh-cluster3.jpg'

export default function Segmentation(){
    return(
        <div className='justify-center items-center w-full h-full'>
            <Navbar/>
            <div className='grid grid-cols-2 grid-flow-col mt-[55px] px-[50px]'>
            <div>
            <div class="fixed top-0 left-0 z-40 px-[50px] w-1/2 h-screen pt-20 transition-transform-translate-x-full border-r  sm:translate-x-0 bg-gray-800 border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                        <div class="flex justify-center items-center w-70 h-[500px] relative border-2 border-gray-300 border-dashed rounded-lg py-12" id="dropzone">
                            <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50" />
                            <div class="text-center">
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
                                        <span class="text-teal-500"> or browse </span>
                                        <span>to upload</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                                    </label>
                                </h3>
                                <p class="mt-1 text-xs text-gray-400">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                        </li>
                        <li>
                            <div className='flex justify-center items-center mt-3'>
                                <button type="button" class="w-[300px] text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-teal-800">Process</button>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div>
            <div className="overflow-y-scroll w-full h-[590px] flex-cols pl-[50px] pt-[10px]">
                <div className="space-y-2">
                    {/* <imageCard 
                     cluster='0'
                     image={Image}/> */}
                    <div className='flex justify-center items-center w-full h-full bg-gray-100 p-5 rounded-lg'>
                    <ul>
                    <li>
                        <img src={Cluster0} class="h-[600px] w-[600px]" alt="" />
                    </li>
                    </ul>
                    </div>
                    <div className='flex justify-center items-center w-full h-full bg-gray-100 p-5 rounded-lg'>
                    <ul>
                    <li>
                        <img src={Cluster1} class="h-[600px] w-[600px]" alt="" />
                    </li>
                    </ul>
                    </div>
                    <div className='flex justify-center items-center w-full h-full bg-gray-100 p-5 rounded-lg'>
                    <ul>
                    <li>
                        <img src={Cluster2} class="h-[600px] w-[600px]" alt="" />
                    </li>
                    </ul>
                    </div>
                    <div className='flex justify-center items-center w-full h-full bg-gray-100 p-5 rounded-lg'>
                    <ul>
                    <li>
                        <img src={Cluster3} class="h-[600px] w-[600px]" alt="" />
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='mt-2 ml-[50px]'>
                <form className='flex items-center justify-between'>
                    <div>
                        <input
                            type='text' 
                            id='clusters' 
                            required
                            className='flex-1 p-2 w-[370px] p-1 px-3 rounded place-items-center bg-gray-100 text-gray-600'
                            placeholder='Choose cluster(s)'>
                        </input>
                    </div>
                    <div>
                        <button type="button" class="w-[120px] text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-3 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-indigo-800">Hitung</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}