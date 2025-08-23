import React from 'react'

interface props {
    handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    children: string
    isSelected: string
    id: string
}

const MenuButton = ({ handleClick, children, isSelected, id }: props) => {
    return (
        <div
            id={id}
            onClick={(e) => handleClick(e)}
            className={` w-fit h-fit px-4 py-2 rounded-3xl hover:cursor-pointer duration-200 group
  ${
      isSelected === id
          ? 'bg-white'
          : 'bg-lightBlue hover:bg-opacity-100 bg-opacity-75'
  } 
`}
        >
            <p className='text-darkBlue text-sm duration-200 font-bold pointer-events-none'>
                {children}
            </p>
        </div>
    )
}

export default MenuButton
