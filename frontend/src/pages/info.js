import React from 'react'
import Navbar from '../component/navbar'
import Example1 from '../assets/example1.jpg'

export default function Info(){
    return(
        <div className='justify-center items-center w-full h-full'>
            <Navbar/>
            <div className='mt-[55px]'>
            <div className='grid grid-cols-2 grid-flow-col px-[50px]'>
                <div className='justify-center items-center mt-5 pr-[30px]'>      
                    <div className='flex justify-center items-center w-full h-[550px] bg-gray-100 p-5 rounded-lg'>
                <img src={Example1} class="h-[500px] w-[620px]" alt="" />
                </div>
                </div>

                <div className='justify-items-center mt-3 pl-[30px]'>
                <div className='flex justify-start items-center w-[680px] bg-gray-100 p-5 rounded-lg mt-2'>
                    <ul>
                    <h3> Luas area:</h3>
                    <h3> Persenan tumpahan:<br/></h3>
                    <h3> Average spreading speed:</h3>
                    <h3> Average spreading area:</h3>
                    <h3> Waktu foto:</h3>
                    <h3> Lama komputasi:</h3>
                    <h3> Space used:</h3>
                    </ul>    
                </div>
                <div className='flex justify-center items-center mt-3'>
                    <button type="button" class="w-[200px] text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-teal-800">Check Score Silhouette</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}