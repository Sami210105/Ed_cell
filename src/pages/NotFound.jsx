import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black text-white'>
        <div className='flex flex-col font-semibold text-5xl space-y-2'>
        <h1 className='text-center text-6xl'>404</h1>
        <h1>Page Not Found.</h1>
        </div>
    </div>
  )
}

export default NotFound;