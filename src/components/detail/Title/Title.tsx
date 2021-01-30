import * as React from "react";
import { useTitleStyles } from "./Title.styles";

export const Title: React.FC = (props) => {
  const classes = useTitleStyles();
  return <h2 className={classes.container}>{props.children}</h2>;
};
