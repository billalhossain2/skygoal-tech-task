import bannerBg from "../../assets/header-bg.png";
import circleTop from "../../assets/circle-top.png"
import halfCircle from "../../assets/half-circle.png"
const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse  items-center justify-center gap-10 px-3 bg-[#F8F1D340] pb-24 md:mb-40 mb-24 mt-5">
      <div>
        <div>
          <img src={circleTop} alt="" />
        </div>
        <p className="font-semibold text-[20px] mb-3 banner-top-title">Discover the beauty of the tropics</p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl banner-title md:space-y-3 md:mb-12 mb-5">
          <p className="font-bold">Tropical</p>
          <div className="font-bold flex gap-5">
            <p className="">Destinations</p>
            <img className="w-8 h-8" src={halfCircle} alt={halfCircle} />
          </div>
          <p className="font-medium">For Student</p>
        </h1>
        <p className="banner-bottom-text text-[#505C59] md:mb-12 mb-5 max-w-[636px]">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae</p>
        <button className="bg-[#F27A44] md:py-4 py-2  md:px-12 px-8 rounded-full text-white">SIGN UP</button>
      </div>

      <div>
        <img className="lg:w-[550px] md:w-[400px] lg:h-[700px] md:h-[400px] w-[90%]" src={bannerBg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
