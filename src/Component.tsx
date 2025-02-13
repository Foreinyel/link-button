import React from "react";
import css from "./Component.less";

export interface LinkButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export const Component = (props: LinkButtonProps) => {
  return (
    <button onClick={props.onClick} className={css.linkButton}>
      {props.children}22
    </button>
  );
};

export default Component;
