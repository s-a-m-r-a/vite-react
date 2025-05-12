import './App.css'
import { Routes, NavLink, Route } from 'react-router';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Work from './Pages/Work';

function App() {
  
  return (
    <>
    <div className='pages'>
  
      <NavLink to='/work'>Samples</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>

    </div>

    <Routes>
      
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/work" element={<Work/>}></Route>

    </Routes>
    </>
  )
}

export default App
