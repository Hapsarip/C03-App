import React from 'react'
import Navbar from '../component/navbar'

export default function Landing(){
    return(
        <div className="justify-center items-center w-full h-full">
            <Navbar/>
            <div className='mt-[55px]'>
            <section class="w-full bg-center bg-cover bg-no-repeat bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdOXrTqSC8J_dbRwNE9qJusAim3EXoTXLkza8YQCNVRvEqkSfZOQ-a2f7YVKqsSorQP9D-2tASGFLdnw1AjuQJQGHS8GkrDjLf39nB7bowuyUBhmmKo5q8aOFcYTAGjARgFIUyeby71UPi6YsKX6a0tl_htYiF4mK6sRIutOK_GYQEzPx1mWMgPrBj8z0/s16000/oil-spill-landing.png')] bg-gray-400 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        Lorem Ipsum Dolor
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/yolo" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-800">
                            Live Tracking
                        </a>
                        <a href="/segmentation" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-800">
                            Segmentation
                        </a>  
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}