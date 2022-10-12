import { FunctionComponent } from "react";
import TeX from "@matejmazur/react-katex";
import {
  NavBar,
  Footer,
  LessonBody,
  LessonDescription,
} from "../../components";

import {
  DivisibilityCalculator,
  DivisibilityTheoremCalculator,
} from "../../calculator";

import imgUrl from "../../assets/images/lesson1.png";

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
        image={imgUrl}
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
        <DivisibilityTheoremCalculator />
        <h2>Divisibility Definition</h2>
        <blockquote>
          Let <TeX>a</TeX> and <TeX>b</TeX> be integers wherein{" "}
          <TeX>a \ne 0</TeX>. It is said that <TeX>a</TeX> divides <TeX>b</TeX>,
          written as <TeX>a \mid b</TeX>, if there exist an integer <TeX>c</TeX>{" "}
          such that <TeX>ac = b</TeX>. Otherwise, it is said that <TeX>a</TeX>{" "}
          does not divides <TeX>b</TeX>, written as <TeX>a \nmid b</TeX>.
        </blockquote>
        <p>
          Divisibility simply means that an integer evenly divides another
          integer. Using the divisibility theorem it could be easily determined
          if it is divisible if <TeX>r</TeX> is <TeX>0</TeX>
        </p>
        <DivisibilityCalculator />
        <h2>Divisibility Rules</h2>
        <p>
          Divisibility rules allow us to determine divisibility using easier
          method rather than using the divisibility theorem. The only drawback
          of needing to memorize different methods for divisors and is only
          useful for about the first dozen integer divisors.
        </p>
        <ol>
          <li>Every integer is divisible by 1</li>
          <li>If the number ends with either 2, 4, 6, 8, or 0</li>
          <li>If the sum of the digits is divisible by 3</li>
          <li>If the last 2 digits is divisible by 4</li>
          <li>If the number ends with either 5 or 0</li>
          <li>If the number is divisible by both 2 and 3</li>
          <li>
            Cross of the last digit, double it and subtract it from the rest of
            the number. If the difference is divisible by 7, then the original
            number is divisible by 7.
          </li>
          <li>If the last three digits is divisible by 8.</li>
          <li>If the sum of the digits is divisible by 9.</li>
          <li>If the number ends with 0</li>
          <li>
            If the difference between the sum of the odd numbered digits and the
            sum of even numbered digits is divisible by 11.
          </li>
          <li>If the number is divisible by both 3 and 4.</li>
          <li>
            Delete the units digit from the number, then subtract 9 times the
            deleted digit from the remaining number. If the difference is
            divisible by 13, then so is the original number.
          </li>
        </ol>
        <h2>Properties of Divisibility</h2>
        <p>
          The basic properties of divisibility are the building block in proving
          divisibility rules
        </p>
        <ol className="centered">
          <li>
            If <TeX>a \mid b</TeX> and <TeX>b \mid c</TeX>, then{" "}
            <TeX>a \mid c</TeX>
          </li>
          <li>
            If <TeX>a \mid b</TeX> and <TeX math="x \in \mathbb{Z}" />, then{" "}
            <TeX>a \mid bx</TeX>
          </li>
          <li>
            If <TeX>a \mid b</TeX> and <TeX>a \mid c</TeX>, then{" "}
            <TeX>(a \mid b \pm c)</TeX>
          </li>
          <li>
            If <TeX>a \mid b</TeX> and <TeX>b \mid a</TeX>, then{" "}
            <TeX>a = | b |</TeX>
          </li>
          <li>
            if <TeX>a \mid 1</TeX>, then <TeX>a = 1</TeX>
          </li>
        </ol>
      </LessonBody>
      <Footer />
    </>
  );
};
