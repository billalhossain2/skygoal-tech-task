import './App.css'
import Banner from './components/Banner/Banner'
import Destinations from './components/Destinations/Destinations'
import Navbar from './components/Navbar/Navbar'
import StudentsAdventure from './components/StudentsAdventure/StudentsAdventure'

function App() {

  return (
     <div className='max-w-[1140px] mx-auto md:px-0 px-3'>
      <Navbar></Navbar>
      <Banner></Banner>
      <StudentsAdventure></StudentsAdventure>
      <Destinations></Destinations>
     </div>
  )
}

export default App
