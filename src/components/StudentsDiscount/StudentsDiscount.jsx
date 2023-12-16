import discountImg from "../../assets/discount-img-bg.png"
import circleTop from "../../assets/circle-top.png"
import halfCircle from "../../assets/half-circle.png"
const StudentsDiscount = () => {
  return (
    <div className="flex md:flex-row md:items-start items-center flex-col-reverse md:gap-20 px-3 mb-32">
      <div className="">
        <div>
          <img className="mb-3" src={circleTop} alt="" />
        </div>
        <p className="md:text-[20px] font-medium">Get 20% off for student</p>
        <div className="flex gap-10">
        <h3 className="md:text-[40px] text-[24px] font-semibold text-[#1F2027]">Student discounts available.</h3>
        <img className="w-8 h-8" src={halfCircle} alt="discount image" />
        </div>
        <p className="md:text-[30px] text-[18px]">Get ready for some fun in the sun!</p>

        <ul className="list-disc list-inside lg:mb-[50px] md:mb-[30px] mb-5 mt-[20px]">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>

        <button className="bg-[#F27A44] md:py-4 py-2  md:px-12 px-8 rounded-full text-white">Explore More</button>
      </div>

      <div className="">
        <img className="w-[400px] h-full" src={discountImg} alt="" />
      </div>
    </div>
  )
}

export default StudentsDiscount