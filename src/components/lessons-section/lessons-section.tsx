import { useState, FunctionComponent } from "react";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../components";
import { Link } from "react-router-dom";

import "./lessons-section.css";
import { useMediaQuery } from "@react-hook/media-query";

import lesson1img from "../../assets/images/lesson1.png";
import lesson2img from "../../assets/images/lesson2.png";
import lesson3img from "../../assets/images/lesson3.png";
import lesson4img from "../../assets/images/lesson4.png";

export const LessonsSection: FunctionComponent<{}> = function () {
  const isTabletView = useMediaQuery("(min-width: 768px)");
  const [active, setActive] = useState<number>(0);

  const lessons = [
    {
      title: "Divisibility",
      description:
        "Learn about the basic properties of divisibility, divisibility rules, and the divisibility theorem.",
      image: lesson1img,
    },
    {
      title: "Primes and Composite",
      description:
        "Differentiate between prime and composite and how composite number can be uniquely represented as product of primes",
      image: lesson2img,
    },
    {
      title: "Patterns in Primes",
      description:
        "Explore patterns of prime numbers and show multiple ways of generating prime numbers",
      image: lesson3img,
    },
    {
      title: "Common Divisors and Multiple",
      description:
        "Revisit the elementary topic of common divisors and common multiple and discuss its connection with prime numbers",
      image: lesson4img,
    },
  ];

  return (
    <section className="lessons">
      <nav className="lessons__tab container">
        {lessons.map(({ title }, index) => (
          <Button
            active={active == index}
            className="lessons__tab__buttons"
            color={`var(--accent-color-${(index % 3) + 1}`}
            onClick={() => {
              setActive(index);
            }}
          >
            {title}
          </Button>
        ))}
      </nav>

      {lessons.map(
        ({ title, description, image }, index) =>
          (isTabletView || active == index) && (
            <div className="lessons__lesson container">
              <div className="lessons__lesson__summary">
                <h1 className="lessons__lesson__summary__title">{title}</h1>
                <p className="lessons__lesson__summary__description">
                  {description}
                </p>
                <Link
                  to={`/lesson/${index + 1}`}
                  className="lessons__lesson__summary__link"
                >
                  Learn more <FontAwesomeIcon icon={faRightLong} />
                </Link>
              </div>
              <div className="lessons__lesson__image">
                <img
                  className="lessons__lesson__image__image"
                  src={image}
                  alt={"sample animation for " + title}
                />
              </div>
            </div>
          )
      )}
    </section>
  );
};
