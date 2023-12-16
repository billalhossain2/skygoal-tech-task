import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
     <div className='max-w-[1140px] mx-auto md:px-0 px-3'>
      <Navbar></Navbar>
      <Banner></Banner>
     </div>
  )
}

export default App
