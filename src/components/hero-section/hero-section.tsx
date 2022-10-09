import { FunctionComponent } from "react";
import "./hero-section.css";

export const HeroSection: FunctionComponent<{}> = function () {
  return (
    <section className="hero container">
      <div className="hero__text">
        <h1 className="hero__text__title">
          learning with <br />
          interactive <br />
          <mark className="hero__text__title__highlighted">
            problem-solving
          </mark>
        </h1>
        <p className="hero__text__details">
          For visual and interactive learner. Learn number theory topics using
          animated examples and interactive calculators rather than lifeless
          handouts and boring lecture notes. Absolutely for free!
        </p>
      </div>
      <div className="hero__image">
        <img
          src="https://via.placeholder.com/240.png?text=hero+image"
          alt="Animation"
          className="hero__image__image"
        />
      </div>
    </section>
  );
};
