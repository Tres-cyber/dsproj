import { FunctionComponent, CSSProperties } from "react";

import "./button.css";

type ButtonProps = {
  color: string;
  children?: string;
  className?: string;
  active?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = function (props) {
  const style = { "--button-color": props.color } as CSSProperties;

  return (
    <button
      className={
        props.className
          ? props.className + " button"
          : "button" + (props.active ? "--active" : "")
      }
      style={style}
    >
      {props.children}
    </button>
  );
};
