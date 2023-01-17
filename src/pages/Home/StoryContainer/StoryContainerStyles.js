import { makeStyles } from "@mui/styles";

export const ContainerStyles = makeStyles({
  parentContainer: {
    backgroundColor: "white",
    border: "1px solid #dbdbdb ",
    padding: "1.2rem 1rem 0rem 1rem",
    borderRadius: "6px",
    width: "470px",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  avtar: {
    height: "70px!important",
    width: "70px!important",
  },
  avtarLabel: {
    padding: "1px 0px",
    fontSize: "10px",
  },
  storyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      margin: "5px 0px",
      fontSize: "14px",
      width: "70px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  modalContainer: {
    outline: "none",
    margin: "auto",
    position: "relative",
  },
  carouselContainer: {
    height: "95vh",
    width: "32vw",
    margin: "auto",
  },
  modalImage: {
    height: "92vh",
    width: "32vw",
    display: "flex",
    alignSelf: "center",
    borderRadius: "8px",
  },
  closeIcon: {
    "& > svg": {
      fontSize: "50px",
      color: "white",
      position: "absolute",
      left: "2rem",
      top: "1rem",
    },
  },
  boxstyle: {
    outline: "0",
  },
  modalstyle: {
    marginLeft: "500px",
    cursor: "pointer",
  },
});
