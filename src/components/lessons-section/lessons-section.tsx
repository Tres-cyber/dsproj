import { FunctionComponent } from "react";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../components";

import "./lessons-section.css";

export const LessonsSection: FunctionComponent<{}> = function () {
  const lessons = [
    {
      title: "Lesson 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum minima error eligendi! Sunt, dolorem.",
      image: "https://via.placeholder.com/450/E7A825/000?text=Lesson+1+Image",
    },
    {
      title: "Lesson 2",
      description:
        "Earum vero cumque vitae eligendi repellendus doloribus cum, corporis suscipit sit iste fugiat laudantium nostrum!",
      image: "https://via.placeholder.com/450/326EE9/000?text=Lesson+2+Image",
    },
    {
      title: "Lesson 3",
      description:
        "Ad, ipsa doloribus sint pariatur aliquam, praesentium dicta natus alias, velit sequi cupiditate quidem nemo.",
      image: "https://via.placeholder.com/450/D4423F/000?text=Lesson+3+Image",
    },
    {
      title: "Lesson 4",
      description:
        "Dolore reprehenderit deleniti fuga sed cumque non atque ex. Illum aut dolorum excepturi sint veritatis. ",
      image: "https://via.placeholder.com/450/E7A825/000?text=Lesson+4+Image",
    },
  ];

  return (
    <section className="lessons">
      <nav className="lessons__tab container">
        {lessons.map(({ title }, index) => (
          <Button
            active
            className="lessons__tab__buttons"
            color={`var(--accent-color-${(index % 3) + 1}`}
          >
            {title}
          </Button>
        ))}
      </nav>

      {lessons.map(({ title, description, image }) => (
        <div className="lessons__lesson container">
          <div className="lessons__lesson__summary">
            <h1 className="lessons__lesson__summary__title">{title}</h1>
            <p className="lessons__lesson__summary__description">
              {description}
            </p>
            <a href="#" className="lessons__lesson__summary__link">
              Learn more <FontAwesomeIcon icon={faRightLong} />
            </a>
          </div>
          <div className="lessons__lesson__image">
            <img
              className="lessons__lesson__image__image"
              src={image}
              alt={"sample animation for " + title}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
