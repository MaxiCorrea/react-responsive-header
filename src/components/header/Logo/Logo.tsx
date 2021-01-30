import * as React from "react";
import { useLogoStyles } from "./Logo.styles";

export const Logo: React.FC = () => {
  const classes = useLogoStyles();
  return (
    <div className={classes.container}>
      M
      <span className={classes.span}>X.</span>
    </div>
  );
};
