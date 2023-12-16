import universityImg1 from "../../assets/card-image-1.png";
import universityImg2 from "../../assets/card-image-2.png";
import universityImg3 from "../../assets/card-image-3.png";
import universityImg4 from "../../assets/card-image-4.png";
import UniversityCard from "./UniversityCard";

const universities = [
  {
    image: universityImg1,
    rating: 4.8,
    status: "EXCLUSIVE",
    name: "Harvard University",
    location: "Cambridge, Massachusetts, UK",
  },
  {
    image: universityImg2,
    rating: 4.8,
    status: "EXCLUSIVE",
    name: "Oxford University",
    location: "Oxford, England",
  },
  {
    image: universityImg3,
    rating: 4.8,
    status: "EXCLUSIVE",
    name: "Stanford University",
    location: "Stanford, California",
  },
  {
    image: universityImg4,
    rating: 4.8,
    status: "EXCLUSIVE",
    name: "Nanyang University",
    location: "Nanyang Ave, Singapura",
  },
];

const Destinations = () => {
  return (
    <div className="mb-20">
      <h3 className="font-medium text-[40px] mb-[60px]">Our Destinations</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {universities.map((university, key) => (
          <UniversityCard key={key} university={university}></UniversityCard>
        ))}
      </div>
      {/* Arrow Sign  */}
      <div className="flex justify-center mt-16">
      <div className="flex items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
        >
          <path
            d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z"
            fill="#262626"
          />
        </svg>
          <div className="flex items-center gap-1">
          <h3 className="text-[32px] font-semibold">2</h3>
          <span className="text-gray-500">/</span>
          <span className="text-gray-500">140</span>
          </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z"
              fill="#F27A44"
            />
          </svg>
      </div>
      </div>
    </div>
  );
};

export default Destinations;
