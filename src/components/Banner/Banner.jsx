import bannerBg from "../../assets/header-bg.png";
const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 px-3">
      <div>
        <p className="font-semibold text-[20px] mb-3 banner-top-title">Discover the beauty of the tropics</p>
        <h1 className="lg:text-7xl md:text-5xl text-3xl banner-title space-y-3 mb-12">
          <p className="font-bold">Tropical</p>
          <p className="font-bold">Destinations</p>
          <p className="font-medium">For Student</p>
        </h1>
        <p className="banner-bottom-text text-[#505C59] mb-12 max-w-[636px]">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae</p>
        <button className="bg-[#F27A44] py-4  px-12 rounded-full text-white">SIGN UP</button>
      </div>

      <div>
        <img className="lg:w-[550px] md:w-[400px] lg:h-[700px] md:h-[400px] w-[90%]" src={bannerBg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
