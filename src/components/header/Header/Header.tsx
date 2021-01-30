import * as React from "react";
import { useHeaderStyles } from "./Header.styles";

export const Header: React.FC = () => {
  const classes = useHeaderStyles();
  return <header className={classes.container}></header>;
};
