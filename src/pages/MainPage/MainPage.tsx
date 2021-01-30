import * as React from "react";
import { Header } from "../../components/header/Header/Header";
import { useMainPageStyles } from "./MainPage.styles";

export const MainPage: React.FC = () => {
  const classes = useMainPageStyles();
  return (
    <div className={classes.container}>
      <Header></Header>
    </div>
  );
};
