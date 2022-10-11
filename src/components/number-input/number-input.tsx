import {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  ChangeEventHandler,
} from "react";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./number-input.css";

type NumberInputProp = {
  value?: (n: number) => void;
  isValid?: (valid: boolean) => void;
  default: number;
  int?: boolean;
  step?: number;
  min?: number;
  max?: number;
  valid?: (n: number) => boolean;
};

export const NumberInput: FunctionComponent<NumberInputProp> = function (
  props
) {
  const int = props.int ?? true;
  const step = props.step ?? 1;
  const min = props.min ?? Number.NEGATIVE_INFINITY;
  const max = props.max ?? Number.POSITIVE_INFINITY;
  const valid = props.valid ?? ((n) => n >= min && n <= max);
  const isValid = props.isValid ?? (() => {});
  const bindValue = props.value ?? (() => {});

  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<number>(props.default ?? 0);
  const [validity, setValidity] = useState<boolean>(true);

  const round = (n: number) => (int ? Math.round(n) : n);

  const handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    let value = parseFloat(e.target.value);
    console.log(value);
    if (Number.isNaN(value)) {
      setValidity(false);
      return;
    }

    if (value < min || value > max || !valid(value)) {
      setValidity(false);
      return;
    }

    setValue(round(value));
  };

  const stepUp = () => {
    if (inputRef.current) inputRef.current.value = String(value + step);
    setValue((val) => val + step);
  };
  const stepDown = () => {
    if (inputRef.current) inputRef.current.value = String(value - step);
    setValue((val) => val - step);
  };

  useEffect(() => {
    bindValue(value);
    setValidity(value >= min && value <= max && valid(value));
  }, [value]);

  useEffect(() => {
    isValid(validity);
  }, [validity]);

  return (
    <div className="number">
      <input
        ref={inputRef}
        type="text"
        className={"number__input" + (validity ? "" : "--invalid")}
        onChange={handler}
        defaultValue={props.default}
      />
      <div className="number__buttons">
        <Button
          onClick={stepUp}
          color="transparent"
          className="number__buttons__button"
          disabled={value + step > max}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </Button>
        <Button
          onClick={stepDown}
          color="transparent"
          className="number__buttons__button"
          disabled={value - step < min}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </div>
    </div>
  );
};
