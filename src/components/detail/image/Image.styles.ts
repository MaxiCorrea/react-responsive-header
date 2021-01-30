import { createUseStyles } from "react-jss";

export const useImageStyles = createUseStyles({
  container: {
    display : "flex",
    justifyContent : "center",
    backgroundColor : "#fff",
    fontFamily : "Lexend",
  },
  image : {
    maxWidth: "100%",
    height: "auto",
  }
});
