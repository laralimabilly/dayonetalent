import AboutUsSection from "../components/AboutUsSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LogoShowcase from "../components/LogoShowcase";
import MethodolodySection from "../components/MethodologySection";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
    return (
        <div className="min-h-screen font-serif">
            <Header />
            <Hero />
            <ServicesSection />
            <MethodolodySection />
            <LogoShowcase />
            <AboutUsSection />
            <CTASection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;