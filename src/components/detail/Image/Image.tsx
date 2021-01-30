import * as React from "react";
import GoLang from "../../../assets/golang.png";
import { useImageStyles } from "./Image.styles";

export const Image: React.FC = () => {
  const classes = useImageStyles();
  return (
    <div className={classes.container}>
      <img src={GoLang.toString()} alt={"golang"} />
    </div>
  );
};
