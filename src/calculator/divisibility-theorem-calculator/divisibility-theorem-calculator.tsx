import { FunctionComponent, useState } from "react";
import { NumberInput } from "../../components";

import "./divisibility-theorem-calculator.css";

const DIVIDE_SYMBOL = String.fromCharCode(0x00f7);
const MULTIPLY_SYMBOL = String.fromCharCode(0x22c5);

export const DivisibilityTheoremCalculator: FunctionComponent<{}> =
  function () {
    const [divisor, setDivisor] = useState<number>(1);
    const [dividend, setDividend] = useState<number>(1);
    const [valid, setValid] = useState<boolean>(true);

    const q = Math.floor(dividend / divisor);
    const r = dividend - q * divisor;

    return (
      <div className="divisibility-theorem-calculator">
        <div className="divisibility-theorem-calculator__input">
          {valid && (
            <>
              <NumberInput int default={1} value={setDividend} />
              {DIVIDE_SYMBOL}
            </>
          )}
          <NumberInput
            min={0}
            valid={(n) => n != 0}
            default={1}
            value={setDivisor}
            isValid={setValid}
          />
          {valid ? (
            <>
              = <span className="divisibility-theorem-calculator__q">{q}</span>{" "}
              r. <span className="divisibility-theorem-calculator__r">{r}</span>
            </>
          ) : (
            "is not a valid Divisor"
          )}
        </div>
        {valid && (
          <div className="divisibility-theorem-calculator__output">
            {dividend} =&nbsp;
            <span className="divisibility-theorem-calculator__q">{q}</span>{" "}
            {MULTIPLY_SYMBOL} {divisor} +{" "}
            <span className="divisibility-theorem-calculator__r">{r}</span>
          </div>
        )}
      </div>
    );
  };
