import React from 'react'

export default function imageCard({cluster, image}){
    return(
        <div className='flex justify-center items-center w-full h-full bg-gray-300 p-5 rounded-lg'>
            <ul>
            <li>
                Klaster {cluster}
            </li>
            <li>
                <img src={image} class="h-100 w-100" alt="" />
            </li>
            </ul>
        </div>
    )
}