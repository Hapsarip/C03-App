import {React, useState} from 'react'

// export default function Dropdown({selected, setSelected}){
//     const [isActive, setIsActive] = useState(false)
//     const option = ['Segmented (combine)', 'Segmented (cluster)', 'grayscale', 'histogram', 'mean filtered', 'GICM', 'meansift (grayscale)']
//     return(
//         <div className='dropdown'>
//             <button
//             className='dropdown-btn text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800'
//             onClick={(e) => setIsActive(!isActive)}>
//                 {selected}
//                 <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//                 </svg>
//                 <span className='fas fa-caret-down'/>
//             </button>
//             {isActive && (
//                 <div className='dropdown-content'>
//                     {option.map((option) => (
//                         <div onClick={(e) => {
//                             setSelected(option)
//                             setIsActive(false)
//                         }}>
//                             {option}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

export default function Dropdown({title, items = [], multiSelect = false}) {
    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)

    function handleOnClick(item) {}

    return (
        <div className='dd-wrapper'>
        <div 
        tabIndex={0}
        className='focus:outline-none rounded-lg px-5 py-2.5 inline-flex items-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800'
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}>
            <div className='dd-header_title'>
                <p className='text-white font-medium text-sm text-center'>{title}</p>
            </div>
            <div className='dd-header_action'>
                <p>{open ? 'Close' : 'Open'}</p>
            </div>
        </div>
        {open && (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <button 
                        type='button'
                        onClick={() => handleOnClick(item)}>
                            <span>{item.value}</span>
                            <span>Selected...</span>
                        </button>
                    </li>
                ))}
            </ul>
        )}
        </div>
    )
}