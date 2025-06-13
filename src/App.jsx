import { Suspense, lazy } from "react";
import NavBar from "./components/NavBar.jsx";

// Lazy-loaded sections
const Hero = lazy(() => import("./sections/Hero.jsx"));
const ShowCase = lazy(() => import("./sections/ShowCase.jsx"));
// const LogoSection = lazy(() => import("./sections/LogoSection.jsx"));
const FeatureCards = lazy(() => import("./sections/FeatureCards.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const TechStack = lazy(() => import("./sections/TechStack.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const App = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
                <Hero />
                <ShowCase />
                {/* <LogoSection /> */}
                <FeatureCards />
                <Experience />
                <TechStack />
                <Contact />
                <Footer />
            </Suspense>
        </>
    );
};

export default App;
