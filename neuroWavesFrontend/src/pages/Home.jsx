import AboutSection from "../components/heroComponents/AboutSection";
import ContactCTASection from "../components/heroComponents/ContactCTASection";
import HeroSection from "../components/heroComponents/HeroSection";
import TestimonialsSection from "../components/heroComponents/TestimonialsSection";


const Home = () => {
    return (
        <div className="bg-white text-gray-800">
            <HeroSection />
            <AboutSection />
            <TestimonialsSection />
            <ContactCTASection />
        </div>
    );
};

export default Home;
