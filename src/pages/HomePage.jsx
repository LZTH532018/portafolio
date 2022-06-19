import Navbar from "../components/Navbar"
import PresentationSection from "../components/PresentationSection"
import AboutSection from "../components/AboutSection"
import WorksSection from "../components/WorksSection"
import FooterSection from "../components/FooterSection"

const HomePage =()=>{
    return (
        <div className="w-full h-auto bg-neutral-700">
            <Navbar />
            <PresentationSection />
            <AboutSection />
            <WorksSection />
            <FooterSection />
        </div>
    )
}

export default HomePage