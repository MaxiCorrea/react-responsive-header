import * as React from "react";
import { useItemStyles } from "./Item.styles";

interface ItemProps {
  caption: string;
}

export const Item: React.FC<ItemProps> = (props) => {
  const classes = useItemStyles();
  return (
    <li className={classes.container}>
      <a className={classes.a} href={window.location.toString()}>
        {props.caption}
      </a>
    </li>
  );
};
