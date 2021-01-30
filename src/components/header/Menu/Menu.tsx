import * as React from "react";
import { useMenuStyles } from "./Menu.styles";

export const Menu: React.FC = (props) => {
  const classes = useMenuStyles();
  return <ul className={classes.ul}>{props.children}</ul>;
};
