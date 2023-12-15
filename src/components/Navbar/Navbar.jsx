const navLinks = ['Home', 'About', 'Schedules', 'Membership', 'Pricing'];

const Navbar = () => {
  return (
    <nav className="flex md:flex-row md:pr-3 flex-col justify-end items-center mt-10">
       <ul className="flex md:flex-row flex-col md:gap-10 gap-5 xl:mr-[363px] md:mr-14 font-medium">
          {
            navLinks.map((navLink, key) => (
            <li key={key}>
              <a href="#">{navLink}</a>
            </li>
            ))
          }
       </ul>

       <div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-5 md:mt-0 mt-5">
         <a href="#" className="text-[#7D7D7D] font-medium">Offers</a>
         <button className="bg-[#F27A44] md:py-4 py-2 md:px-8 px-5 rounded-full text-white">Courses</button>
       </div>
    </nav>
  )
}

export default Navbar