import React from "react";
import aboutImage from './image/about-image.jpg';

import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="main-about-page">
            <h2>About page</h2>
            <div className="about-image">
                <img src={aboutImage} className="about-img" alt="veg" height="300px" width="600px"/>
            </div>
            <p>Hi, I’m Yaw, the owner and founder of Ava Estell, an all-natural skincare brand that’s <br></br>  made with melanin in mind</p>
            <p>I started Ava Estell to help my wife, who was struggling with her hyperpigmented skin.</p>
            <p>No matter what she tried, nothing worked, and it was starting to impact her confidence.</p>
            <Link to="/">Go to Home page</Link>
        </div>
    )
}
export default About;