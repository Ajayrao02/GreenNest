import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Plants from './Pages/Plants'
import PotsPlanters from './Pages/PotsPlanters'
import Seeds from './Pages/Seeds'
// import FAQs from './Components/FAQs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import FAQs from './Components/FAQs'
import StayInLoop from './Components/StayInLoop'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/pots-planters" element={<PotsPlanters />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <StayInLoop />
      <Footer />
    </Router>
  )
}

export default App