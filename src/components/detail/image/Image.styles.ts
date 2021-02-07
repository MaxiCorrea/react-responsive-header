import { createUseStyles } from "react-jss";

export const useImageStyles = createUseStyles({
  container: {
    display : "flex",
    justifyContent : "center",
    backgroundColor : "#fff",
    fontFamily : "Lexend",
  },
  image : {
    objectFit : "cover",
    width: "100%",
    height: "100%",
  }
});
