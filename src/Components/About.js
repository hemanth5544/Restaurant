import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
  
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Good food is good mood.
        </h1>
        <p className="primary-text">
        Welcome to FOODIE, A place where every dish tells the story of India’s rich culinary heritage.
        Our journey began with a simple passion — to bring authentic Indian flavors to your plate, crafted with love and the finest ingredients.
        </p>
        <p className="primary-text">
        At FOODIE, we believe food is not just to be eaten, but experienced — with family, friends, and heartfelt conversations. Step into our world and savor the true taste of India.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default About;
