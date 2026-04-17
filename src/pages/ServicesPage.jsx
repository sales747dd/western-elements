import Services from '../sections/Services'

export default function ServicesPage({ onQuoteOpen }) {
  return (
    <div style={{ paddingTop: '4rem', minHeight: '80vh' }}>
      <Services onQuoteOpen={onQuoteOpen} />
    </div>
  )
}
