import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles({
  container: {
    fontFamily : "Lexend"
  },
  button : {
    color : "#fff",
    cursor : "pointer",
    fontWeight : "bold",
    textTransform : "uppercase",
    padding : "12px 30px",
    border : "2px solid #fff",
    borderRadius : "4px",
    backgroundColor : "transparent",
  }
});
