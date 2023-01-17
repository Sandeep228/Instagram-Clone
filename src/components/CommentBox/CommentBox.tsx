import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { Grid, Typography } from "@mui/material";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { v4 } from "uuid";
import { makeStyles } from "@mui/styles";

interface CommentProps {
  comment: any;
}

const commentStyles = makeStyles({
  containerStyle: {
    maxHeight: "350px",
    overflow: "scroll",
    rowGap: "1rem",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
  spanStyle: {
    fontWeight: "500",
    marginRight: "10px",
  },
});

export const CommentBox = ({ comment }: CommentProps) => {
  const classes = commentStyles();
  return (
    <>
      <Grid container m={1} spacing={1} className={classes.containerStyle}>
        {comment?.map((item: any) => {
          return (
            <Grid container spacing={2} key={v4()}>
              <Grid item xs={1}>
                <ProfilePicture src={item?.dp || ""} type="profile" />
              </Grid>
              <Grid item xs={9}>
                <Typography>
                  <span className={classes.spanStyle}>{item?.name || ""} </span>
                  <span> {item?.comment || ""}</span>
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <FavoriteBorderOutlined />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export {};
