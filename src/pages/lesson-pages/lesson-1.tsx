import { FunctionComponent } from "react";
import TeX from "@matejmazur/react-katex";
import {
  NavBar,
  Footer,
  LessonBody,
  LessonDescription,
} from "../../components";

import { DivisibilityCalculator } from "../../calculator";

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
      <LessonBody>
        <h1>Divisibility </h1>
        <h2>Divisibility Theorem</h2>
        <blockquote>
          Let <TeX math="a \in \mathbb{Z}" /> and{" "}
          <TeX math="d \in (0, +\infty)" />. Then there exist unique{" "}
          <TeX>q</TeX> and <TeX>r</TeX> such that <TeX>a = dq + r</TeX> and{" "}
          <TeX math="0 \leq r < d" />
        </blockquote>
        <p>
          The Divisibility Theorem state that every division of an integer
          number by any positive number can be uniquely represented as the
          product of an integer quotient multiplied by the divisor plus an
          integer remainder between zero and the divisor.
        </p>
        <DivisibilityCalculator />
      </LessonBody>
      <Footer />
    </>
  );
};
