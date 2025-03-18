import React from "react";
import profilePic from "../assets/profile.jpg";

const Home = () => (
    <section id="home" className="home">
        <img src={profilePic} alt="Profile" className="profile-img" />
        <h1>[Your Name]</h1>
        <p>Data Analyst, Freelancer, Educator</p>
        <a href="#" download className="btn">Download CV</a>
    </section>
);

export default Home;
