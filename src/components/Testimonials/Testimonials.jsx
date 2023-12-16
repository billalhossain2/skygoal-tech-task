import authorImg1 from "../../assets/testimonial-1.png"
import authorImg2 from "../../assets/testimonial-2.png"
import authorImg3 from "../../assets/testimonial-3.png"
import ClientCard from "./ClientCard"

const testimonials = [
  {
    image:authorImg1,
    author:'Corey Korsgaard',
    message:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    image:authorImg2,
    author:'Jakob Aminoff',
    message:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
  {
    image:authorImg1,
    author:'Carla Press',
    message:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  },
]

const Testimonials = () => {
  return (
    <div>
      <h1 className="md:text-[40px] text-[30px] font-medium text-center mb-10">Testimonials</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-16 mb-20">
      {
        testimonials.map((review, key) => (<ClientCard key={key} review={review}></ClientCard>))
      }
    </div>
    </div>
  )
}

export default Testimonials