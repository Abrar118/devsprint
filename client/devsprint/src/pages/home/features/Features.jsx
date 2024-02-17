import React from "react";
import "./Features.css";
import feature_pic from "/feats.svg";

import { SiSharex } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Features = () => {
  return (
    <section className="features-container">
      <div className="features">
        <div className="upper-description">
          <h1 className="description-title">Light, Fast and Powerful</h1>
          <p className="descrition-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            odit? Dignissimos vero praesentium, aliquam eligendi labore natus
            quia maiores sed commodi tempora excepturi repudiandae, facere illo.
            Optio quae vel dolorum?
          </p>
        </div>
        <div className="lower-description">
          <div className="feature">
            <SiSharex className="feat-icon" />
            <h3>Collaborative Codespaces</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, odit? 
            </p>
          </div>
          <div className="feature">
            <AiOutlineFundProjectionScreen className="feat-icon" />
            <h3>Project sharing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, odit?
            </p>
          </div>
        </div>
      </div>

      <div className="feat-image">
        <img src={feature_pic} alt="features" />
      </div>
    </section>
  );
};

export default Features;
