import * as React from "react";
import { useButtonStyles } from "./Button.styles";

export const Button: React.FC = (props) => {
  const classes = useButtonStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button}>
          {props.children}
      </button>
    </div>
  );
};
