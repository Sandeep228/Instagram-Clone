import { makeStyles } from "@mui/styles";

export const UserStyle = makeStyles({
  addicon: {
    verticalAlign: "middle",
    width: "80px!important",
    height: "80px!important",
    borderRadius: "90px!important",
    outline: "1px solid #c9c9c9!important",
    color: "#c9c9c9!important",
  },
  button: {
    backgroundColor: "#efefef!important",
    color: "black!important",
    height: "28px",
    fontSize: "12px!important",
  },
  box: {
    backgroundColor: "#fafafa",
  },
  modalContainer: {
    outline: "none",
    marginTop: "3%!important",
    marginLeft: "8%",
  },
  highlights: {
    borderBottom: "1px solid #dbdbdb",
    cursor: "pointer",
  },
  profileName: {
    padding: "none",
    margin: "0rem 0rem 1rem 0rem ",
    fontSize: "28px",
    fontWeight: "lighter",
  },
  imageBox: {
    marginRight: "4px",
  },
  updatePicModal: {
    margin: "auto",
    backgroundColor: "white",
    marginTop: "20%",
    outline: "none",
    width: "500px",
    borderRadius: "15px",
    "& p": {
      textAlign: "center",
      padding: "1rem",
    },
    "& li": {
      padding: "1rem",
      textAlign: "center!important",
    },
  },
  updatePicBtn: {
    "& input": {
      display: "none",
    },
  },
  modalCarousel: {
    height: "100%",
    "& img": {
      maxHeight: "80%",
    },
  },
  storyModal: {
    marginLeft: "500px",
    cursor: "pointer",
  },
  box: {
    outline: "0",
  },
});
