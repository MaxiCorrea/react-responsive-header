import * as React from "react";
import { Item } from "../Item/Item";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Button } from "../Button/Button";
import { useHeaderStyles } from "./Header.styles";

export const Header: React.FC = () => {
  const classes = useHeaderStyles();
  return (
    <header className={classes.container}>
      <Logo/>
      <Menu>
        <Item caption={"Item 1"} />
        <Item caption={"Item 2"} />
        <Item caption={"Item 3"} />
      </Menu>
      <Button>Buy Now</Button>
    </header>
  );
};
