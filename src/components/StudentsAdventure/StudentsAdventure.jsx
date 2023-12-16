import avatar1 from "../../assets/avatar1.png"
import avatar2 from "../../assets/avatar2.png"
import avatar3 from "../../assets/avatar3.png"
import circleTop from "../../assets/circle-top.png"
import StucentCard from "./StucentCard"

const students = [
  {
    image:avatar1,
    name:'Jenny Wilson',
    descriptions:'Lorem ipsum dolor sit amet, consectetur adipiscing...'
  },
  {
    image:avatar2,
    name:'Jenny Wilson',
    descriptions:'Lorem ipsum dolor sit amet, consectetur adipiscing...'
  },
  {
    image:avatar3,
    name:'Jenny Wilson',
    descriptions:'Lorem ipsum dolor sit amet, consectetur adipiscing...'
  },
]

const StudentsAdventure = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center lg:gap-28 md:gap-14 mb-20">
       <div className="md:mt-0 mt-20">
          {
            students.map((student, key) =>(<StucentCard key={key} student={student}></StucentCard>))
          }
       </div>
       <div className="relative md:pl-20 pl-10 pt-10">
        <p className="absolute left-0 top-0">
          <img className="md:w-auto md:h-auto w-10" src={circleTop} alt="" />
        </p>
        <h3>
        <span className="md:text-[40px] text-3xl font-semibold">Tropical Adventure</span>
        <br />
        <span className="md:text-[30px] text-2xl">for Students.</span>
        </h3>
        <p className="font-medium md:text-[20px] text-[17px]">Student Tropical Vacation: Relax and Recharge</p>

        <ul className="list-disc list-inside lg:mb-[50px] md:mb-[30px] mb-10 mt-[20px]">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>

        <button className="bg-[#F27A44] md:py-4 py-2  md:px-12 px-8 rounded-full text-white">Explore More</button>
       </div>
    </div>
  )
}

export default StudentsAdventure