import { FunctionComponent, CSSProperties, MouseEventHandler } from "react";

import "./button.css";

type ButtonProps = {
  color: string;
  children?: string;
  className?: string;
  active?: boolean;
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
    >
      {props.children}
    </button>
  );
};
