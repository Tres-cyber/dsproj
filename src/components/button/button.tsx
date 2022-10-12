import {
  FunctionComponent,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

import "./button.css";

type ButtonProps = {
  color: string;
  children?: ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FunctionComponent<ButtonProps> = function (props) {
  const style = { "--button-color": props.color } as CSSProperties;

  return (
    <button
      className={
        (props.className ? props.className + " button" : "button") +
        (props.active ? "--active" : "")
      }
      style={style}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
