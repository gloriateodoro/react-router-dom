import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <nav className='flex fixed gap-4 top-0 left-0 right-0 bg-white p-4 justify-center'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <footer className='flex fixed bottom-0 left-0 right-0 bg-white p-4'>
      <Footer />
    </footer>
    </>
  )
}

export default App
