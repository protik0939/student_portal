import Image from 'next/image'
import React from 'react'

export default function Navbar() {

const buttonClass = "nav-item";

    return (
        <div className='w-full p-2 fixed'>
            <div className='w-full bg-gray-600 p-2 flex justify-between items-center rounded-xl'>
                <div className='w-1/2'>
                    <Image className='w-30' src={'/logos/logo.png'} alt='Student Portal' height={60} width={140} />
                </div>

                <ul className='flex w-1/4 justify-between'>
                    <li className={buttonClass}>
                        Home
                    </li>
                    <li className={buttonClass}>
                        About
                    </li>
                    <li className={buttonClass}>
                        Result
                    </li>
                    <li className={buttonClass}>
                        CGPA
                    </li>
                    <li className={buttonClass}>
                        CGPA
                    </li>
                    <li className={buttonClass}>
                        More
                    </li>
                </ul>

                <div className='w-1/2'>
                    <div className='w-full flex justify-end'>
                        <button className='bg-primary-500 rounded-xl p-2 px-4 cursor-pointer hover:scale-105 transition-all'>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
