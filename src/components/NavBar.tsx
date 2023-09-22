import React from 'react'

const NavBar = () => {
  return (
    <section className='w-full bg-[#000] shadow-md text-white py-3.5 px-12 flex items-center justify-between'>
      <section className='layout flex items-center justify-between'>
        <div className='font-bold text-lg'>WEBSITE LOGO</div>
        <div className='flex gap-x-5'>
          <div className='font-regular text-sm'>HOME</div>
          <div className='font-regular text-sm'>ABOUT</div>
          <div className='font-regular text-sm'>CONTACT</div>
        </div>
      </section>
    </section>
  )
}

export default NavBar