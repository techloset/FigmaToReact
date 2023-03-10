import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Components/Footer';
import HandSection from './Components/HandSection';
import Cardssection from './Components/Cardssection';
import PublishBook from './Components/PublishBook';
import NavBar from './Components/NavBar';
import FeaturedWork from './Components/FeaturedWork';

function App() {
  return (
    <div>

      <NavBar/>
      <FeaturedWork/>
      <PublishBook/>
      <Cardssection/>
      <HandSection/>
      <Footer/>
    </div>
  )
}

export default App
