import './App.css'
import Banner from './components/Banner/Banner'
import BookNowForm from './components/BookNowForm/BookNowForm'
import Destinations from './components/Destinations/Destinations'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import StudentsAdventure from './components/StudentsAdventure/StudentsAdventure'
import StudentsDiscount from './components/StudentsDiscount/StudentsDiscount'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
     <div className='max-w-[1140px] mx-auto md:px-0 px-3'>
      <Navbar></Navbar>
      <Banner></Banner>
      <StudentsAdventure></StudentsAdventure>
      <Destinations></Destinations>
      <StudentsDiscount></StudentsDiscount>
      <BookNowForm></BookNowForm>
      <Testimonials></Testimonials>
      <Footer></Footer>
     </div>
  )
}

export default App
