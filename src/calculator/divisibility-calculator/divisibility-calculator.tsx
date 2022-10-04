import { useState, FunctionComponent, ChangeEvent } from "react";

const DIVIDES_SYMBOL = String.fromCharCode(0x2223);
const NOT_DIVIDES_SYMBOL = String.fromCharCode(0x2224);

export const DivisibilityCalculator: FunctionComponent<{}> = function () {
  const [divisor, setDivisor] = useState<number>(1);
  const [dividend, setDividend] = useState<number>(1);

  const setter = (e: ChangeEvent<HTMLInputElement>, s: (n: number) => void) => {
    s(Number.parseInt(e.target.value));
  };

  return (
    <>
      <input
        type="number"
        step={1}
        defaultValue={1}
        onChange={(e) => {
          setter(e, setDivisor);
        }}
      />

      {dividend % divisor == 0 ? DIVIDES_SYMBOL : NOT_DIVIDES_SYMBOL}

      <input
        type="number"
        step={1}
        defaultValue={1}
        onChange={(e) => {
          setter(e, setDividend);
        }}
      />
    </>
  );
};
