import { FunctionComponent } from "react";
import TeX from "@matejmazur/react-katex";
import {
  NavBar,
  Footer,
  LessonBody,
  LessonDescription,
} from "../../components";
import { GCDCalculator, LCMCalculator } from "../../calculator";

import imgUrl from "../../assets/images/lesson4.png";

export const Lesson4: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={4}
        title="Common Divisors and Multiples"
        description="Importance lead to the development of one of the oldest algorithm but still in common use today"
        summary={[
          "Revisit the elementary topic of common divisors and common multiple and discuss its connection with prime numbers",
        ]}
        image={imgUrl}
      />
      <LessonBody>
        <h1>Common Divisors and Multiples</h1>
        <h2>Common Divisors</h2>
        <p>
          Common divisor of two or more integers is a positive integer that
          divides each of the integer. It is always guaranteed for a pair of
          integer to have at least one common divisors because 1 divides all
          integer. A pair of integers that is only both divisible by 1 are
          called Co-prime and is a very important relationship. For example
          teeth of adjacent gears are commonly co-prime to distribute wear and
          gunk between gears.
        </p>
        <p>
          One very important common divisor is the Greatest Common Divisor
          (GCD). It is the biggest positive integer that evenly divides each
          integer. One method to calculate GCD is by prime factorization,
          wherein you factor all integers and find all the common factors then
          multiply them.
        </p>
        <GCDCalculator />
        <h2>Common Multiples</h2>
        <p>
          The common multiples of two or more numbers are the numbers that can
          be completely divisible by each of the given numbers. Unlike common
          divisors, there are infinitely many common multiples for any set of
          positive integers.
        </p>
        <p>
          There is also a very important common multiple which is the Least
          Common Multiple (LCM). The LCM is the smallest number that is the
          product of two or more numbers. In other words, it is the lowest
          possible number that can be divisible by the given numbers. There is a
          very important property of LCM wherein a pair of integer <TeX>a</TeX>{" "}
          and <TeX>b</TeX>, if <TeX>a \mid b</TeX> then <TeX>LCM(a, b) = b</TeX>
          .
        </p>
        <p>
          Calculating LCM is also somewhat similar process with GCD. You first
          factor all integers then combine common integers then multiply all
          factors.
        </p>
        <LCMCalculator />
        <h2>Relationship between GCD and LCM</h2>
        <p>
          Computing both GCD and LCM could be bothersome depending on the
          problem but using the equation,{" "}
          <TeX>GCD(a, b) \cdot LCM(a,b) = a \cdot b</TeX>, you could easily find
          the other given the product of the two integer.
        </p>
      </LessonBody>
      <Footer />
    </>
  );
};
