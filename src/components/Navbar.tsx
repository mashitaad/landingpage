import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/logo.png" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <p>Lorem</p>
                <p>Ipsum</p>
                <p>Bingung</p>
                <p>Nulis</p>
                <p>Apa</p>
            </div>
            <button className='bg-[#FF8A00] hover:bg-[#f6d6b1] text-[#ffffff] hover:text-[#FF8A00] font-bold py-3 px-7 rounded-full'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar