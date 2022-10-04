import { useState, FunctionComponent } from "react";

function leastFactor(n: number) {
  for (let i = 2; i <= Math.sqrt(n); ++i) if (n % i == 0) return i;
  return n;
}

const PrimeFactor: FunctionComponent<{ num: number }> = function ({ num }) {
  let fact = leastFactor(num);
  if (fact == num) return <em>{num} is prime</em>;

  const division: { fact: number; num: number }[] = [];

  while (fact != num) {
    division.push({ fact, num });

    num = num / fact;
    fact = leastFactor(num);
  }

  return (
    <table>
      {division.map(({ fact, num }) => (
        <tr>
          <td>{fact}</td>
          <td>{num}</td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td>{num}</td>
      </tr>
    </table>
  );
};

export const PrimeFactorCalculator: FunctionComponent<{}> = function () {
  const [num, setNum] = useState<number>(1);

  return (
    <>
      <input
        type="number"
        min={2}
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
