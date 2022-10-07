import { FunctionComponent } from "react";
import "./hero-section.css";

export const HeroSection: FunctionComponent<{}> = function () {
  return (
    <section className="hero container">
      <div className="hero__text">
        <h1 className="hero__text__title">
          learning with <br />
          interactive <br />
          <span className="hero__text__title__highlighted">
            problem-solving
          </span>
        </h1>

        <p className="hero__text__details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          doloremque quidem quaerat, omnis quos minima. Soluta modi maiores,
          doloremque eius laborum, illum alias, quam ab delectus deleniti vel
          ducimus dolorum!
        </p>
      </div>
      <div className="hero__image">
        <img src="https://via.placeholder.com/450.png" alt="Animation" className="hero__image__image"/>
      </div>
    </section>
  );
};
