import Hero from "./sections/Hero.jsx";
import ShowCase from "./sections/ShowCase.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowCase />
            {/*<LogoSection />*/}
            <FeatureCards />
            <Experience />
            <TechStack />
            <Contact />
            <Footer />

        </>
    )
}
export default App
