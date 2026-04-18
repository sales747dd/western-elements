import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import './index.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal  = () => { setModalOpen(true);  document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setModalOpen(false); document.body.style.overflow = ''; };

  return (
    <>
      <ScrollToTop />
      <Header onQuoteOpen={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onQuoteOpen={openModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onQuoteOpen={openModal} />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer onQuoteOpen={openModal} />
      {modalOpen && <QuoteModal onClose={closeModal} />}
    </>
  )
}

export default App
