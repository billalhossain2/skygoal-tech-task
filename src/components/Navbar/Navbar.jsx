import Hamburger from 'hamburger-react'
import { useState } from 'react';

const navLinks = ['Home', 'About', 'Schedules', 'Membership', 'Pricing'];

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className='md:mb-10'>
       <div className="md:flex md:pr-3 justify-end items-center mt-10 hidden">
       <ul className="flex gap-10 xl:mr-[363px] md:mr-14 font-medium">
          {
            navLinks.map((navLink, key) => (
            <li key={key}>
              <a href="#">{navLink}</a>
            </li>
            ))
          }
       </ul>

       <div className="flex items-center gap-10">
         <a href="#" className="text-[#7D7D7D] font-medium">Offers</a>
         <button className="bg-[#F27A44] md:py-4 py-2 md:px-8 px-5 rounded-full text-white">Courses</button>
       </div>
       </div>

       {/* Mobile Menu  */}
      <div className="mt-2 md:hidden">
      <div className='flex justify-end'><Hamburger toggled={isOpen} toggle={setOpen} /></div>
      <div className={`absolute bg-white py-5 px-4 w-full duration-300 ${isOpen ? 'left-0' : 'left-[-1200px]'}`}>
       <ul className="space-y-5">
          {
            navLinks.map((navLink, key) => (
            <li key={key}>
              <a href="#">{navLink}</a>
            </li>
            ))
          }
       </ul>

       <div className="space-y-5 mt-5">
         <a href="#" className="text-[#7D7D7D] font-medium">Offers</a>
         <br />
         <button className="bg-[#F27A44] py-2  px-4 rounded-full text-white">Courses</button>
       </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar