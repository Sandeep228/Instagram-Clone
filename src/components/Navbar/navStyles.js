import { makeStyles } from "@mui/styles";

export const NavbarStyles = makeStyles({
  navbarContainer: {
    display: "flex",
    flexFlow: "column wrap",
    height: "100vh",
    borderRight: "1px solid #dbdbdb ",
    position: "sticky",
    top: "0rem",
    zIndex: "200",
  },
  listContainer: {
    padding: "10px 10px",
  },
  listStyle: {
    display: "flex",
    padding: "10px 15px",
    marginBottom: "0.5rem!important",
    borderRadius: "25px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    "& p": {
      fontWeight: "500!important",
      display: "flex",
      alignItems: "center",
      paddingLeft: "1rem",
    },
  },
  navbarTitle: {},
  navbarLogo: {
    width: "160px",
    padding: "20px 25px",
    cursor: "pointer",
  },
  listIcon: {
    fontSize: "2.2rem!important",
  },
  menuGrid: {
    position: "absolute!important",
    bottom: "0",
  },
  menuButton: {
    padding: "40px 15px!important",
    cursor: "pointer",
  },
  menuItem: {
    width: "250px",
    padding: "0!important",
  },
  modalStyle: {
    backgroundColor: "white",
    borderRadius: "20px",
    height: "70vh",
    width: "40vw",
    margin: "auto",
    marginTop: "5%",
    outline: "none",
    "& > div": {
      "& >p": {
        textAlign: "center",
        padding: "0.5rem 0rem",
        borderBottom: "1px solid #dbdbdb",
      },
    },
  },
  previewPost: {
    height: "100%",
    width: "100%",
    "& img": {
      height: "100%",
      width: "100%",
    },
    "& > form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "30%",
      gap: "1rem",

      "& > label": {
        backgroundColor: "#0095f6!",
        fontSize: "15px!important",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#0095f6!important",
          boxShadow: "none",
        },
      },
    },
  },

  createPostBtn: {
    width: "180px",
    color: "white",
    backgroundColor: "#0095f6",
    borderRadius: "5px",
    fontSize: "15px!important",
    padding: "0.4rem",
    boxShadow: "none",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#0095f6!important",
      boxShadow: "none",
    },
    "& input": {
      display: "none!important",
    },
  },
  actionStyle: {
    marginLeft: "30rem",
    cursor: "pointer",
  },
});
