import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 90px",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#6ebae6",
    fontFamily: "Lexend",
    "@media screen and (max-width:1000px)": {
      flexDirection : "column"
    },
    "@media screen and (max-width:600px)": {},
  },
});
