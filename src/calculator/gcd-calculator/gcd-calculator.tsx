import { FunctionComponent, useState } from "react";
import { NumberInput } from "../../components";

import "./gcd-calculator.css";

const MULTIPLY_SYMBOL = String.fromCharCode(0x22c5);

function humanizeFactor(fac: number[]) {
  let lastFac = 1;
  let aggr: { prime: number; exp: number }[] = [];

  fac
    .sort((a, b) => a - b)
    .forEach((n) => {
      if (n != 1 && n == lastFac) {
        aggr[aggr.length - 1].exp++;
      } else {
        aggr.push({ prime: n, exp: 1 });
        lastFac = n;
      }
    });

  return aggr;
}

function leastFactor(n: number): number {
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i == 0) return i;
  return n;
}

function factor(n: number): number[] {
  if (n == 1) return [1];

  const ret: number[] = [];
  while (n != 1) {
    const fact = leastFactor(n);
    ret.push(fact);

    n /= fact;
  }

  return ret.sort((a, b) => a - b);
}

function gcd(a: number, b: number): number {
  for (let i = Math.min(a, b); i >= 1; --i)
    if (a % i == 0 && b % i == 0) return i;
  return 1;
}

export const GCDCalculator: FunctionComponent<{}> = function () {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);

  const [valid1, setValid1] = useState<boolean>(true);
  const [valid2, setValid2] = useState<boolean>(true);

  const g = gcd(a, b);
  const gFact = humanizeFactor(factor(g));
  const aFact = humanizeFactor(factor(a / g));
  const bFact = humanizeFactor(factor(b / g));

  return (
    <div className="gcd-calculator">
      <div className="gcd-calculator__input">
        GCD(
        <NumberInput
          int
          min={1}
          max={2310}
          default={1}
          isValid={setValid1}
          value={setA}
        />
        ,
        <NumberInput
          int
          min={1}
          max={2310}
          default={1}
          isValid={setValid2}
          value={setB}
        />
        ) {valid1 && valid2 ? `= ${g}` : " is not valid"}
      </div>
      {valid1 && valid2 && (
        <div className="gcd-calculator__solution">
          <p className="gcd-calculator__solution__line">
            {a} ={" "}
            <span className="gcd-calculator__solution__line__gcd">
              {gFact.map(({ prime, exp }, i) => (
                <>
                  {i != 0 && MULTIPLY_SYMBOL} {prime}{" "}
                  {exp != 1 && <sup>{exp}</sup>}{" "}
                </>
              ))}
            </span>
            {aFact.map(({ prime, exp }) => (
              <>
                {MULTIPLY_SYMBOL} {prime} {exp != 1 && <sup>{exp}</sup>}{" "}
              </>
            ))}
          </p>
          <p className="gcd-calculator__solution__line">
            {b} ={" "}
            <span className="gcd-calculator__solution__line__gcd">
              {gFact.map(({ prime, exp }, i) => (
                <>
                  {i != 0 && MULTIPLY_SYMBOL} {prime}{" "}
                  {exp != 1 && <sup>{exp}</sup>}{" "}
                </>
              ))}
            </span>
            {bFact.map(({ prime, exp }) => (
              <>
                {MULTIPLY_SYMBOL} {prime} {exp != 1 && <sup>{exp}</sup>}{" "}
              </>
            ))}
          </p>
          <p className="gcd-calculator__solution__line">
            GCD ={" "}
            <span className="gcd-calculator__solution__line__gcd">
              {gFact.map(({ prime, exp }, i) => (
                <>
                  {i != 0 && MULTIPLY_SYMBOL} {prime}{" "}
                  {exp != 1 && <sup>{exp}</sup>}{" "}
                </>
              ))}
            </span>{" "}
            = {g}
          </p>
        </div>
      )}
    </div>
  );
};
