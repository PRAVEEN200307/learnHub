import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'


function App() {

  return (
    <>
      <div className= ' bg-black w-screen h-max '>
        <div className="container mx-auto text-white   max-w-7xl ">
          <Header />
        </div>

        <div>
          <Outlet />
        </div>

        <Footer/>        
      </div>
    </>
  )
}

export default App
