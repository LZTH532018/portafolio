import Navbar from "../components/Navbar";
import PresentationSection from "../components/PresentationSection";
import MeSection from "../components/MeSection";

const HomePage =()=>{
    return (
        <div className="w-full h-auto bg-neutral-700">
            <Navbar />
            <PresentationSection />
            <MeSection />
        </div>
    )
}

export default HomePage