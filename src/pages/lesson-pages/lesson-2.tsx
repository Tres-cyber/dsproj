import { FunctionComponent } from "react";
import TeX from "@matejmazur/react-katex";
import {
  NavBar,
  Footer,
  LessonBody,
  LessonDescription,
} from "../../components";

import { PrimeFactorCalculator } from "../../calculator";

export const Lesson2: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={2}
        title="Primes and Composite"
        description="Backbone of cryptography and encryption"
        summary={[
          "Differentiate between prime and composite and how composite number can be uniquely represented as product of primes",
        ]}
        image={
          <img src="https://via.placeholder.com/450/326EE9/000?text=Lesson+2+Image" />
        }
      />
      <LessonBody>
        <h1>Primes and Composite</h1>
        <h2>Difference of Primes and Composite Number</h2>
        <blockquote>
          An integer <TeX math="p > 1" /> is called a prime number if it has no
          divisor <TeX>d</TeX> such that <TeX math="1 < d < p" />. Otherwise{" "}
          <TeX>p</TeX> is a composite number.
        </blockquote>
        <p>
          Prime numbers are numbers that can be divided by number other than
          itself and 1.
        </p>
        <h2>Prime Factorization</h2>
        <p>
          Composite numbers can be uniquely represented as product of prime
          numbers. Prime factorization is the process of finding this set of
          primes.
        </p>
        <p>
          There are many method to prime factor a composite number. One such
          method is by continuous division. It is done by continuously dividing
          a number by the lowest possible integer that evenly divides it until
          it reaches a prime number.
        </p>
        <PrimeFactorCalculator />
      </LessonBody>
      <Footer />
    </>
  );
};
