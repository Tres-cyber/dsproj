import { useState, FunctionComponent } from "react";

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
      <table>
        {division.map(({ fact, num }) => (
          <tr>
            <td>{fact == num ? "" : fact}</td>
            <td>{num}</td>
          </tr>
        ))}
      </table>
      <output>
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
    <>
      <input
        type="number"
        min={2}
        max={512}
        step={1}
        defaultValue={1}
        onChange={(e) => {
          setNum(Number.parseInt(e.target.value));
        }}
      />
      {Number.isNaN(num) || <PrimeFactor num={num} />}
    </>
  );
};
