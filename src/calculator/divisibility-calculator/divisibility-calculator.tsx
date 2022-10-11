import { useState, FunctionComponent, ChangeEvent } from "react";
import { NumberInput } from "../../components";

import "./divisibility-calculator.css";

const DIVIDES_SYMBOL = String.fromCharCode(0x2223);
const NOT_DIVIDES_SYMBOL = String.fromCharCode(0x2224);

export const DivisibilityCalculator: FunctionComponent<{}> = function () {
  const [divisor, setDivisor] = useState<number>(1);
  const [dividend, setDividend] = useState<number>(1);
  const [valid, setValid] = useState<boolean>(true);

  return (
    <div className="divisibility-calculator">
      <NumberInput
        step={1}
        valid={(n) => n != 0}
        default={1}
        isValid={setValid}
        value={setDivisor}
      />
      {valid ? (
        <>
          {dividend % divisor == 0 ? DIVIDES_SYMBOL : NOT_DIVIDES_SYMBOL}
          <NumberInput
            step={1}
            valid={(n) => n != 0}
            default={1}
            value={setDividend}
          />{" "}
        </>
      ) : (
        "is not valid a Divisor "
      )}
    </div>
  );
};
