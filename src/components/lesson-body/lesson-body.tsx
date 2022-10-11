import { FunctionComponent, ReactNode } from "react";

import "./lesson-body.css";

type LessonBodyProps = {
  children?: ReactNode;
};

export const LessonBody: FunctionComponent<LessonBodyProps> = function (props) {
  return (
    <div className="container">
      <main className="lesson-body">{props.children}</main>
    </div>
  );
};
