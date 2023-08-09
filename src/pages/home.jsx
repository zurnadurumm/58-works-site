import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import WhyUs from "../components/WhyUs";
import React, { useRef } from "react";

function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const whyUsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToWhyUs = () => {
        whyUsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="h-screen w-full mx-auto font-poppins ">
            <NavBar scrollToContact={scrollToContact} scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToWhyUs={scrollToWhyUs} />
            <Landing ref={homeRef} />
            <AboutUs ref={aboutRef} />
            <WhyUs ref={whyUsRef} />
            <Contact ref={contactRef} />
            <Footer />






        </div>
    )
}

export default Home