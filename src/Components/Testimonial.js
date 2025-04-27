import React from "react";
import ProfilePic from "../Assets/images.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Clients Say About Us</h1>
        <p className="primary-text">
        We take pride in delivering exceptional service. Here’s what our valued customers have to say about their experience with us.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Amazing service and delicious food! Every visit feels special. Highly recommend to everyone!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Lakshmi Naveen</h2>
      </div>
    </div>
  );
};

export default Testimonial;
