import { useState, FunctionComponent } from "react";
import { NumberInput } from "../../components";

import "./prime-factor-calculator.css";

function humanizeFactor(fac: number[]) {
  let lastFac = 1;
  let aggr: { prime: number; exp: number }[] = [];

  fac
    .sort((a, b) => a - b)
    .forEach((n) => {
      if (n == lastFac) {
        aggr[aggr.length - 1].exp++;
      } else {
        aggr.push({ prime: n, exp: 1 });
        lastFac = n;
      }
    });

  return aggr;
}

function leastFactor(n: number) {
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i == 0) return i;
  return n;
}

const PrimeFactor: FunctionComponent<{ num: number }> = function (props) {
  let num = props.num;
  let fact = leastFactor(num);
  if (fact == num) return <output>{num} is prime</output>;

  const division: { fact: number; num: number }[] = [];

  while (fact != num) {
    division.push({ fact, num });

    num = num / fact;
    fact = leastFactor(num);
  }
  division.push({ fact: num, num: num });

  return (
    <>
      <table className="prime-factor-calculator__division">
        {division.map(({ fact, num }) => (
          <tr>
            <td className="prime-factor-calculator__division__factor">
              {fact == num ? "" : fact}
            </td>
            <td className="prime-factor-calculator__division__quotient">
              {num}
            </td>
          </tr>
        ))}
      </table>
      <output className="prime-factor-calculator__factors">
        {props.num} ={" "}
        {humanizeFactor(division.map((div) => div.fact)).map(
          ({ prime, exp }, i) => (
            <>
              {i != 0 && String.fromCharCode(0x22c5)}
              {prime}
              {exp > 1 && <sup>{exp}</sup>}
            </>
          )
        )}
      </output>
    </>
  );
};

export const PrimeFactorCalculator: FunctionComponent<{}> = function () {
  const [num, setNum] = useState<number>(1);

  return (
    <div className="prime-factor-calculator">
      <NumberInput min={2} max={512} step={1} default={2} value={setNum} />
      {Number.isNaN(num) || <PrimeFactor num={num} />}
    </div>
  );
};
