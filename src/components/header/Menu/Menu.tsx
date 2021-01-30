import * as React from "react";
import { useMenuStyles } from "./Menu.styles";

export const Menu: React.FC = (props) => {
  const classes = useMenuStyles();
  return (
    <div>
      <ul className={classes.container}>{props.children}</ul>
    </div>
  );
};
