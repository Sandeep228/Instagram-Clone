import { makeStyles } from "@mui/styles";

export const AuthStyles = makeStyles({
  parentContainer: {
    backgroundColor: "#fafafa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column!important",
    minHeight: "750px",
    gap: "15px",
    "& >div": {
      border: "1px solid #eaeaea",
    },
  },
  childContainer: {
    maxWidth: "400px",
    padding: "3rem 0rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    border: "1px solid #dbdbdb",
  },
  authFooter: {
    display: "flex",
    padding: "10px 0px",
    flexDirection: "column",
    alignItems: "center!important",
    justifyContent: "center",
    maxWidth: "400px",
    backgroundColor: "white",
    border: "0.1px solid black",
    fontSize: "smaller",
    "& > p": {
      fontSize: "16px",
      fontWeight: "200",
    },
  },
  titleLogo: {
    width: "13rem",
    margin: "0.4rem 3rem",
    marginLeft: "100px",
    paddingBottom: "2.5rem",
  },
  errorMessage: {
    color: "red!important",
    textAlign: "center!important",
  },
  authButton: {
    fontSize: "smaller!important",
    fontWeight: 400,
    width: "70%",
    color: "white!important",
    backgroundColor: "#0095f6 !important",
    padding: " 0.4re 0.5rem",
    borderRadius: "0px",
    marginLeft: "15%!important",
  },
  formContainer: {
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  inputField: {
    "& > div": {
      margin: "0.2rem 0rem",
      backgroundColor: "#fafafa",
      minWidth: "70%",
    },
    "& input": {
      padding: "0.6rem 0.5rem",
      fontSize: "smaller",
    },
  },
});
