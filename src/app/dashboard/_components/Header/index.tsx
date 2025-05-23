'use client'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { INav } from '@/interfaces'
import Links from './Links'

const VendorHeader = ({ nav }: { nav: INav[] })  => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='sticky top-0 left-0 z-30 flex flex-col w-full bg-white shadow'>
      <div className='flex items-center justify-between w-full gap-4 p-4 border-b'>
        <h1 className='text-xl font-medium'>
            Dashboard
        </h1>
        <div className='flex items-center gap-1 md:gap-4'>
          { isOpen ? 
            <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50 text-gray-dark`} /> 
            : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-gray-dark' />
          }
          {/* <Image src={Profile} alt={""} className='hidden w-12 h-12 rounded-md cursor-pointer md:block' /> */}
        </div>
      </div>
      <Links setIsOpen={setIsOpen} isOpen={isOpen} nav={nav} />
    </div>
  )
}

export default VendorHeader