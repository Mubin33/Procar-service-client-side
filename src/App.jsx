 
import './App.css'
import Navbar from './Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer';

function App() { 

  return (
    <div>
      <div className="sticky border-b-2 border-green-100  z-10 top-0"> 
      <Navbar/> 
      </div>
      <div className=" container mx-auto">
      <div className="min-h-[650px]">
        <Outlet />
      </div>
    </div>
      <div className=' bg-base-300 w-full'>
      <Footer />
      </div>
    </div>
  )
}

export default App
