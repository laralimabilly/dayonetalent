import Header from './components/Header'
import Hero from './components/Hero'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import AboutUsSection from './components/AboutUsSection'
import LogoShowcase from './components/LogoShowcase'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <div className="min-h-screen font-serif">
      <Header />
      <Hero />
      <ServicesSection />
      <LogoShowcase />
      <AboutUsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App