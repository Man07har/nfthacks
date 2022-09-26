import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/About';
import About from './components/Blogs';
import Hello from './components/Hello';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='box-border'>
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='src\components\Home.js' element={<Home />} />
      <Route exact path='src\components\About.js' element={<About />} />
      <Route exact path='src\components\Blogs.js' element={<Blogs />} />
    </Routes>
  </Router>
  <Hello />
  <Footer />
    </div>
  )
}

export default App