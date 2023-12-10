

import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import FooterHome from './components/FooterHome'


function App() {
 

  return (
    <>
    <NavItems/>
    <div className='min-vh-100'>
    <Outlet />
    </div>
    <FooterHome/>
    
    </>
  )
}

export default App
