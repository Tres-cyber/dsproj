import { FunctionComponent } from "react";
import { NavBar, LessonDescription } from "../../components";

export const Lesson3: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={3}
        title="Patterns in Primes"
        description="Explore the power of divisibility"
        summary={[
          "Learn about the basic properties of divisibility, divisibility rules, and the divisibility theorem.",
        ]}
        image={
          <img src="https://via.placeholder.com/450/D4423F/000?text=Lesson+3+Image" />
        }
      />
    </>
  );
};
