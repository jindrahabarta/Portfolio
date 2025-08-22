import Chevron from '@/app/_icons/Chevron'
import React, { useState } from 'react'

const LanguageSelector = () => {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div onMouseLeave={() => setIsOpened(false)} className='relative navLi stroke-midBlue2 hover:stroke-lightBlue duration-200 select-none opacity-0'>
            <div
                onClick={() => setIsOpened((prev) => !prev)}
                className='flex items-center cursor-pointer'>
                <p className='darkBlueText duration-200'>EN</p>
                <Chevron size={22} color={'text-midBlue2'} className={`${isOpened ? 'rotate-0' : 'rotate-180'} duration-200`}></Chevron>
            </div>

            {
                isOpened &&
                <div className='absolute -bottom-6 left-0 w-full'>
                    <ul className='list-none'>
                        <li>
                            <button className='flex gap-1 items-center'>
                                <p className='text-midBlue2 hover:text-lightBlue duration-200 font-medium'>CZ</p>
                            </button>
                        </li>
                    </ul>

                </div>
            }
        </div>
    )
}

export default LanguageSelector