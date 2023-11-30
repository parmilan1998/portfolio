import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-10 flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='h-[35px] w-[35px] bg-primaryColor text-white font-semibold text-lg flex justify-center items-center rounded-full '>
              M
            </span>
            <div className='leading-6'>
              <h2 className='text-xl text-primaryColor font-bold'>Parmilan</h2>
              <p className='text-sm text-primaryColor font-semibold'>
                Personal
              </p>
            </div>
          </div>
          <div className='menu'>
            <ul className='flex items-center gap-10'>
              <li>
                <a className='text-headingColor font-semibold' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a className='text-headingColor font-semibold' href='#services'>
                  Services
                </a>
              </li>
              <li>
                <a
                  className='text-headingColor font-semibold'
                  href='#portfolio'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a className='text-headingColor font-semibold' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-primaryColor border border-solid border-primaryColor font-semibold max-h-10 py-2 px-4 rounded-lg hover:bg-primaryColor hover:text-white hover:font-semibold ease-in duration-300'>
              <i class='ri-send-plane-line'></i>Let's Talk
            </button>
            <span className='text-2xl text-primaryColor md:hidden cursor-pointer'>
              <i class='ri-menu-fold-fill'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
