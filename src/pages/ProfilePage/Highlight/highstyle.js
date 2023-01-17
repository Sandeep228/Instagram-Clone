import { makeStyles } from "@mui/styles";

export const HighStyle = makeStyles({
  title: {
    textAlign: "center",
    fontWeight: "550!important",
    padding: "10px",
    borderBottom: "1px solid #dbdbdb",
  },
  inputText: {
    padding: "16px",
    margin: "auto",
    borderBottom: "1px solid #dbdbdb",
    "& > div": {
      width: "100%",
      "& input": {
        fontSize: "smaller",
      },
    },
  },
  fileInput: {
    paddingLeft: "40%",
    "& input": {
      display: "none",
    },
  },
});
