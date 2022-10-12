import { FunctionComponent } from "react";
import TeX from "@matejmazur/react-katex";
import {
  NavBar,
  Footer,
  LessonBody,
  LessonDescription,
} from "../../components";

import { SieveCalculator } from "../../calculator";

export const Lesson3: FunctionComponent<{}> = function () {
  return (
    <>
      <NavBar />
      <LessonDescription
        index={3}
        title="Patterns in Primes"
        description="Explore patterns of primes and show multiple ways of generating primes"
        summary={[
          "There are infinite number of primes and infinite patterns accompanying it. Let us explore how big primes are generated in practical applications",
        ]}
        image={
          <img src="https://via.placeholder.com/450/D4423F/000?text=Lesson+3+Image" />
        }
      />
      <LessonBody>
        <h1>Patterns in Primes</h1>
        <h2>The Prime Number Theorem</h2>
        <p>
          According to Euclid, there are infinitely many prime numbers. This
          means that there is no "biggest prime". There will always be a prime
          number bigger. If we want to find the number of primes we have to list
          all primes. But this method is not feasible for big numbers.
        </p>
        <p>
          This reason is why mathematician are finding for a function{" "}
          <TeX>\pi (x)</TeX>, meaning the number of prime from <TeX>1</TeX> to{" "}
          <TeX>x</TeX>. One such endeavor is the proving of the Riemann
          Hypothesis from the Millennium Prize Problems wherein $1M would be
          awarded to who ever can prove it. As we are not yet able to find a
          proper formula for <TeX>\pi (x)</TeX>. We approximate it as{" "}
          <TeX math="\pi (x) = \frac {x} {ln(x)}" /> which is proven to be
          accurate as x become bigger.
        </p>
        <h2>Sieve of Eratosthenes</h2>
        <p>
          For generating group of of small primes Sieve of Eratosthenes is one
          of the best method. It works by starting with the number <TeX>2</TeX>{" "}
          then cancel all of its multiple. After canceling multiples move to the
          least number that is not canceled. Repeat canceling multiples then
          moving to the least not canceled number until there is no more
          multiples that can be canceled.
        </p>
        <SieveCalculator />
      </LessonBody>
      <Footer />
    </>
  );
};
