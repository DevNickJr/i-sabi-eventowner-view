"use client"
import React from 'react'
import { LineWave } from 'react-loader-spinner'

const InlineLoader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-4 p-12 py-16 text-center md:py-32 md:flex-1'>
        <LineWave
            visible={true}
            height="100"
            width="100"
            color='#089C4C'
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    </div>
  )
}

export default InlineLoader