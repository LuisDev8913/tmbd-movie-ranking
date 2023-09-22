import UnstyledLink from '@/components/links/UnstyledLink'
import DarkLightThemeToggler from '@/components/togglers/DarkLightThemeToggler'
import React from 'react'

const NavBar = () => {
  return (
    <section className='w-full bg-[#000] shadow-md text-white py-3.5 px-12 flex items-center justify-between'>
      <section className='layout flex items-center justify-between'>
        <div className='font-bold text-lg'>
          WEBSITE LOGO
          {/* <NextImage /> */}
        </div>
        <div className='flex gap-x-5  items-center'>
          <UnstyledLink href='/' className='font-regular text-sm'>HOME</UnstyledLink>
          <UnstyledLink href='/' className='font-regular text-sm'>ABOUT</UnstyledLink>
          <div>
            <DarkLightThemeToggler />
          </div>
        </div>
      </section>
    </section>
  )
}

export default NavBar