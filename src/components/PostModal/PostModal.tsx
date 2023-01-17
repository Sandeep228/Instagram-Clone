import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { CommentBox } from "../CommentBox/CommentBox";
import { CarouselCard } from "../ Carousel/CarouselCard";
const useStyles = makeStyles({
  paper: {
    width: "500px",
    height: "700px",
  },
  modalCarousel: {
    height: "700px",
    "& img": {
      maxHeight: "80%",
    },
  },
});

interface CommentProps {
  comment?: any;
}

interface PostModalProps extends CommentProps {
  user: {
    dp: string;
    email: string;
    name: string;
    uid: string;
  };
  src: string[];
}

export const PostModal = ({ user, comment, src }: PostModalProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid item={true} xs={6} className={classes.modalCarousel}>
        <CarouselCard src={src} type="post" />
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          <Grid container direction="column">
            <Grid display="flex" flexDirection="row">
              <Grid item xs={1} m={2}>
                <ProfilePicture src={user?.dp || ""} type="profile" />
              </Grid>
              <Grid item xs={8}>
                <Typography mt={2} fontWeight={"bold"}>
                  {user?.name || ""}
                </Typography>
              </Grid>
              <Grid item xs={2} mt={1} ml={12}>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container padding={2}>
              <Grid item xs={1}>
                <ProfilePicture src={user?.dp || ""} type="profile" />
              </Grid>
              <Grid display="flex" flexDirection="row" gap={2} mx={1}>
                <Typography>{user?.name || ""}</Typography>
                <Typography>Golden</Typography>
              </Grid>
            </Grid>
            <CommentBox comment={comment} />
            <Grid container mt={1}>
              <Grid item xs={1}>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="add to favorites">
                  <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item xs={9}>
                <IconButton aria-label="add to favorites">
                  <SendSharpIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="add to favorites">
                  <BookmarkBorderOutlinedIcon />
                </IconButton>
              </Grid>
              <Grid item xs={7} mt={1} ml={1}>
                Liked by <b>geekyants</b> and <b>123 others</b>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
