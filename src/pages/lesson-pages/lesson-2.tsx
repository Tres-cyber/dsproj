import { FunctionComponent } from "react";
import { NavBar, LessonDescription } from "../../components";

export const Lesson2: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={2}
        title="Divisibility"
        description="Explore the power of divisibility"
        summary={[
          "Learn about the basic properties of divisibility, divisibility rules, and the divisibility theorem.",
        ]}
        image={
          <img src="https://via.placeholder.com/450/326EE9/000?text=Lesson+2+Image" />
        }
      />
    </>
  );
};
