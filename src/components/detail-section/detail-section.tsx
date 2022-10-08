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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            eligendi quo error provident, in architecto!
          </p>
        </div>
        <div className="detail__description__meaning">
          <h2 className="detail__description__meaning__title">learning</h2>
          <p className="detail__description__meaning__par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            impedit assumenda ad quam nihil ex!
          </p>
        </div>
        <div className="detail__description__meaning">
          <h2 className="detail__description__meaning__title">instructions</h2>
          <p className="detail__description__meaning__par">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur quaerat similique, magnam assumenda nobis totam
          </p>
        </div>
      </div>
    </section>
  );
};
