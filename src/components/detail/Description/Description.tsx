import * as React from "react";
import { useDescriptionStyles } from "./Description.styles";

export const Description: React.FC = (props) => {
  const classes = useDescriptionStyles();
  return <p className={classes.container}>{props.children}</p>;
};
