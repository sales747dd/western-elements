import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import Services from '../sections/Services'
import Process from '../sections/Process'
import Gallery from '../sections/Gallery'
import WhyUs from '../sections/WhyUs'
import CTABanner from '../sections/CTABanner'

export default function HomePage({ onQuoteOpen }) {
  return (
    <>
      <Hero     onQuoteOpen={onQuoteOpen} />
      <TrustBar />
      <Services onQuoteOpen={onQuoteOpen} preview={true} />
      <Process />
      <Gallery preview={true} />
      <WhyUs />
      <CTABanner onQuoteOpen={onQuoteOpen} />
    </>
  )
}
