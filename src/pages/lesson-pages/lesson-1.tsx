import { FunctionComponent } from "react";
import { NavBar, LessonDescription } from "../../components";

export const Lesson1: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={1}
        title="Divisibility"
        description="Explore the power of divisibility"
        summary={[
          "Learn about the basic properties of divisibility, divisibility rules, and the divisibility theorem.",
        ]}
        image={
          <img src="https://via.placeholder.com/450/E7A825/000?text=Lesson+1+Image" />
        }
      />
    </>
  );
};
