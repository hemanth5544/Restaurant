import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose from a wide range of mouthwatering Indian dishes — from spicy curries to sweet desserts, crafted with love.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Order once for a special treat or subscribe for regular meals — it’s totally up to you! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Sit back and relax! We deliver your meals hot, fresh, and right on time, straight to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Enjoying your favorite Indian meals has never been easier!
        Follow these simple steps to get delicious food delivered hot and fresh.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
