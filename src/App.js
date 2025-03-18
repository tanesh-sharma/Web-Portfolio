import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./styles.css";

const App = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let currentSection = "home";

            document.querySelectorAll("section").forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <Home />
            <Projects />
            <Skills />
            <Services />
            <Contact />
        </div>
    );
};

export default App;
