import React from 'react'
import Navbar from '../component/navbar'

export default function Landing(){
    return(
        <div className="justify-center items-center w-full h-full">
            <Navbar/>
            <div className='mt-[55px]'>
            <section class="w-full bg-center bg-cover bg-no-repeat bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdOXrTqSC8J_dbRwNE9qJusAim3EXoTXLkza8YQCNVRvEqkSfZOQ-a2f7YVKqsSorQP9D-2tASGFLdnw1AjuQJQGHS8GkrDjLf39nB7bowuyUBhmmKo5q8aOFcYTAGjARgFIUyeby71UPi6YsKX6a0tl_htYiF4mK6sRIutOK_GYQEzPx1mWMgPrBj8z0/s16000/oil-spill-landing.png')] bg-gray-400 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        SeaWatch: Oil Spill Detector
                    </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    SeaWatch is an oil spill detection algorithm integrated in a web application, designed to assist in the detection and classification of oil spills at sea. SeaWatch has the ability to segment oil spill areas, detect oil spill areas, and predict the distribution of oil spill areas.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/yolo" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-800">
                            Live Tracking
                        </a>
                        <a href="/segmentation" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-800">
                            Segmentation
                        </a>
                        <a href="/predict" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-800">
                            Prediction
                        </a>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
}