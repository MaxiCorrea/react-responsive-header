import * as React from "react";
import { Detail } from "../../components/detail/Detail/Detail";
import { Header } from "../../components/header/Header/Header";
import { useMainPageStyles } from "./MainPage.styles";

export const MainPage: React.FC = () => {
  const classes = useMainPageStyles();
  return (
    <div className={classes.container}>
      <Header></Header>
      <Detail></Detail>
    </div>
  );
};
