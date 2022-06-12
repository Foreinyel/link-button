import React from "react";
import css from "./Component.less";

export interface LinkButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export const Component = (props: LinkButtonProps) => {
  return <button className={css.linkButton}>{props.children}</button>;
};

export default Component;
