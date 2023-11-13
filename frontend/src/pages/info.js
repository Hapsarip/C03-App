import React from 'react'
import Navbar from '../component/navbar'
import Segmented from '../assets/contoh-segmented.jpg'
import Example1 from '../assets/example1.jpg'

export default function Info(){
    return(
        <div className='justify-center items-center w-full h-full'>
            <Navbar/>
            <div className='mt-[55px]'>
            <div className='flex justify-center px-[50px] font-semibold text-xl pt-5'>Detail Information</div>
            <div className='grid grid-cols-2 grid-flow-col px-[50px]'>
                <div className='justify-center items-center mt-5 pr-[30px]'>      
                    <div className='flex justify-center items-center w-full h-[550px] bg-gray-100 p-5 rounded-lg'>
                <img src={Segmented} class="h-[500px] w-[620px]" alt="" />
                </div>
                </div>

                <div className='justify-center items-center content-center mt-3 pl-[30px]'>
                <div className='flex justify-items-stretch items-center w-full bg-gray-100 p-5 rounded-lg mt-2'>
                    <ul>
                    <h3> Total area: 548523.625 m^2</h3>
                    <h3> Percentage of oil spill: 7.2%</h3>
                    <h3> Date/time: 17:46:33 Sunday, November 12, 2023</h3>
                    <h3> Computational time: 39.72s</h3>
                    <h3> Space used: 1.9 GB</h3>
                    </ul>    
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <button type="button" class="w-[200px] text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-teal-800">Check Score Silhouette</button>
                </div>
                <div className='flex justify-items-stretch items-center w-full bg-gray-100 p-5 rounded-lg mt-2'>
                    Silhouette Score: 0.78888767
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}