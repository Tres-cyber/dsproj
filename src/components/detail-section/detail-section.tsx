import { FunctionComponent } from "react";
import "./detail-section.css";

export const DetailSection: FunctionComponent<{}> = function () {
  return (
    <section className="detail container">
      <div className="detail__logo">
        <h1 className="detail__logo__title">
          open-source <br /> learning <br />
          <u className="detail__logo__title__highlight">instructions</u>
        </h1>
        <img
          src="https://via.placeholder.com/240.png?text=logo"
          alt="Animation"
          className="detail__logo__image"
        />
      </div>
      <div className="detail__description">
        <div className="detail__description__meaning">
          <h2 className="detail__description__meaning__title">open-source</h2>
          <p className="detail__description__meaning__par">
            Learn without paying or registering. It is free and open. You could
            view and contribute to the source code at{" "}
            <a href="https://github.com/Tres-cyber/dsproj" target="_blank">
              this repository.
            </a>
          </p>
        </div>
        <div className="detail__description__meaning">
          <h2 className="detail__description__meaning__title">learning</h2>
          <p className="detail__description__meaning__par">
            Learn introductory number theory topics with fun interactive lesson
            and calculators for more dynamic examples.
          </p>
        </div>
        <div className="detail__description__meaning">
          <h2 className="detail__description__meaning__title">instructions</h2>
          <p className="detail__description__meaning__par">
            Lessons are terse, condense, and straight to the point without fancy
            jargons and unnecessary information while still being as instructive
            as possible.
          </p>
        </div>
      </div>
    </section>
  );
};
