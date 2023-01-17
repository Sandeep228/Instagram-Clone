import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import { v4 } from "uuid";
import useStyles from "./carousel.styles";

interface CarouseleProps {
  src: string[];
  type?: string;
}

export const CarouselCard = ({ src = [], type }: CarouseleProps) => {
  const classes = useStyles();

  return (
    <>
      <Carousel
        autoPlay={false}
        indicators={false}
        className={type ? `${classes.post}` : ""}
        navButtonsAlwaysInvisible={src?.length === 1 ? true : false}
      >
        {src?.map((item) => (
          <CardMedia
            component="img"
            image={item}
            key={v4()}
            className={type ? `${classes.carouselImage}` : ""}
          />
        ))}
      </Carousel>
    </>
  );
};
