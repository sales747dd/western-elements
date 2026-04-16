import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import About from './sections/About'
import Services from './sections/Services'
import Process from './sections/Process'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import WhyUs from './sections/WhyUs'
import CTABanner from './sections/CTABanner'
import './index.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal  = () => { setModalOpen(true);  document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setModalOpen(false); document.body.style.overflow = ''; };

  return (
    <>
      <Header onQuoteOpen={openModal} />
      <main>
        <Hero     onQuoteOpen={openModal} />
        <TrustBar />
        <About />
        <Services onQuoteOpen={openModal} />
        <Process />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <CTABanner onQuoteOpen={openModal} />
      </main>
      <Footer onQuoteOpen={openModal} />
      {modalOpen && <QuoteModal onClose={closeModal} />}
    </>
  )
}

export default App
