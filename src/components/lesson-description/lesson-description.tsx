import { FunctionComponent, ReactNode } from "react";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import "./lesson-description.css";

type LessonDescriptionProp = {
  index: number;
  title: string;
  description: string;
  summary: string[];
  image?: string;
};

export const LessonDescription: FunctionComponent<LessonDescriptionProp> =
  function (props) {
    const navigate = useNavigate();

    return (
      <section className="lesson-description container">
        <div className="lesson-description__text">
          <Link to="/home" className="lesson-description__return">
            <FontAwesomeIcon icon={faAngleLeft} /> {"  "}
            Return to home
          </Link>
          <h1 className="lesson-description__text__title">{props.title}</h1>
          <h2 className="lesson-description__text__caption">
            {props.description}
          </h2>
          {props.summary.map((summary) => (
            <p className="lesson-description__text__summary">{summary}</p>
          ))}
        </div>
        <div className="lesson-description__graphics">
          <img
            src={props.image}
            className="lesson-description__graphics__image"
          />
          <div className="lesson-description__graphics__controls">
            <Button
              color="transparent"
              className="lesson-description__graphics__controls__prev"
              disabled={props.index == 1}
              onClick={() => {
                navigate(`../${props.index - 1}`);
              }}
            >
              Previous
            </Button>
            <Button
              color="transparent"
              className="lesson-description__graphics__controls__next"
              disabled={props.index == 4}
              onClick={() => {
                navigate(`../${props.index + 1}`);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    );
  };
