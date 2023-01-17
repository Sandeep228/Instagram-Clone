import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imagebox: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
    cursor: "pointer",
  },
});

interface Image {
  src: string;
}

export const ImageBox = ({ src }: Image) => {
  const classes = useStyles();

  return (
    <>
      <img src={src} className={classes.imagebox} alt="" />
    </>
  );
};
