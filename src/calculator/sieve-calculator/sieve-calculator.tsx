import { FunctionComponent, useState } from "react";
import { NumberInput } from "../../components";
import { useMediaQuery } from "@react-hook/media-query";

import "./sieve-calculator.css";

function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}

function map2d<T, U>(map: (elem: T) => U, array: T[][]): U[][] {
  return array.map((row) => row.map(map));
}

function reduce2d<T, U>(
  reducer: (prev: U, elem: T) => U,
  array: T[][],
  init: U
): U {
  return array.reduce((prev, row) => row.reduce(reducer, prev), init);
}

function leastFactor(n: number): number {
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i == 0) return i;
  }
  return n;
}

export const SieveCalculator: FunctionComponent<{}> = function () {
  const [valid, setValid] = useState<boolean>(true);
  const [num, setNum] = useState<number>(90);
  const cols = useMediaQuery("(min-width: 768px)") ? 10 : 6;

  const matrix = map2d(
    (x) => ({ n: x, f: leastFactor(x) }),
    range(Math.ceil(num / cols)).map((x) => range(cols, x * cols + 1))
  );
  const legend = Array.from(
    reduce2d(
      (acc, { n, f }) => acc.add(n == f ? -1 : f),
      matrix,
      new Set() as Set<number>
    )
  )
    .filter((x) => x != -1)
    .sort((a, b) => a - b);
  const table = map2d(
    ({ n, f }) => ({ n, h: n == f ? -1 : legend.indexOf(f) }),
    matrix
  );

  return (
    <div className="sieve-calculator">
      <div className="sieve-calculator__input">
        <NumberInput
          int
          step={5}
          min={6}
          max={90}
          value={setNum}
          isValid={setValid}
          default={90}
        />
      </div>
      <div className="sieve-calculator__output">
        <table className="sieve-calculator__output__table">
          {table.map((row) => (
            <tr>
              {row.map(({ n, h }) =>
                n == 1 || n > num ? (
                  <td> </td>
                ) : (
                  <td
                    style={{
                      backgroundColor:
                        h == -1
                          ? "transparent"
                          : `hsl(${(220 + h * 55) % 360}, 81%, 80%)`,
                    }}
                    onClick={() => {
                      if (n == 69) alert("Nice");
                    }}
                  >
                    {n}
                  </td>
                )
              )}
            </tr>
          ))}
        </table>
        <ul className="sieve-calculator__output__legends">
          <li className="sieve-calculator__output__legends__factor">
            Prime numbers
          </li>
          {legend.map((f, i) => (
            <li
              className="sieve-calculator__output__legends__factor"
              style={{
                color: `hsl(${(220 + i * 55) % 360}, 81%, 40%)`,
                listStyle: "square",
              }}
            >
              Multiples of {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
