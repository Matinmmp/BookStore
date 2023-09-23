import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-12 mt-[6rem]'>
        <p className=' text-2xl lg:text-5xl'>همچین صفحه ای وجود ندارد.</p>
        <img src="Images/404 Error-amico.svg" className="w-[30rem]"/>
    </div>
  )
}

export default NotFound