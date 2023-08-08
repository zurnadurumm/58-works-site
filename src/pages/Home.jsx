import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import WhyUs from "../components/WhyUs";
import React from "react";

function Home() {


    return (
        <div className="h-screen w-full mx-auto font-poppins ">
            <NavBar />
            <Landing />
            <AboutUs />
            <WhyUs />
            <Contact />
            <Footer />






        </div>
    )
}

export default Home