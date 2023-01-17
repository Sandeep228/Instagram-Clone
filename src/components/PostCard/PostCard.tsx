import { useEffect, useState } from "react";
import { AppDispatch } from "../../core/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardActions,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { CarouselCard } from "../ Carousel/CarouselCard";
import { postCard } from "./PostCardStyles";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiPicker from "emoji-picker-react";
import {
  addLikeThunk,
  removeLikeThunk,
  addCommentThunk,
  getPostsThunk,
} from "../../core/features/userSlice";
import { PostModal } from "../PostModal/PostModal";
import { io } from "socket.io-client";
import userActions from "../../core/actions/userAction";
interface PostCardProps {
  users: {
    doc_ID: string;
    src: string[];
    likes?: string[];
    comments?: Array<object>[];
    user: {
      dp: string;
      email: string;
      name: string;
      uid: string;
    };
  };
}
export const PostCard = ({ users }: PostCardProps) => {
  let socket = io("http://localhost:8000");

  const classes = postCard();
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useSelector((state: any) => state.authReducer.user);
  const [like, setLike] = useState<boolean>();
  const [likeCount, setLikeCount] = useState<any>(0);
  const [comment, setComment] = useState<any>("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  const [Add, setAdd] = useState(false);
  const addOpen = () => setAdd(true);
  const addClose = () => setAdd(false);
  const [notifications, setNotifications] = useState<any>([]);
  let type: any;
  const inputcomment = (e: any) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const onEmojiClick = (emojiObject: any, event: MouseEvent) => {
    setSelectedEmoji(emojiObject.emoji);
    setComment((value: any) => {
      return value + emojiObject.emoji;
    });

    setShowEmoji(false);
  };

  const handlepost = (e: any) => {
    e.preventDefault();
    dispatch(
      addCommentThunk({
        docID: users.doc_ID,
        userID: authUser.uid,
        name: authUser.name,
        dp: authUser.dp,
        comment: comment,
      })
    );
    handleNotification(2);
    socket.on("getNotifications", (data: any) => {
      setNotifications([...notifications, data]);
    });
    setComment("");
    setTimeout(() => {
      dispatch(getPostsThunk());
    }, 1000);
  };
  const displayNotification = (n: any) => {
    userActions.addnotification(n);
  };

  const handleNotification = (type: number) => {
    type === 1 && setLike(true);
    socket.emit("sendNotification", {
      senderName: authUser?.name,
      receiveName: users.user?.name,
      type,
      user_uid: users.user?.uid,
    });
  };

  const handleLike = (doc_id: any, user_uid: any, type: any) => {
    dispatch(addLikeThunk({ docID: doc_id, userID: user_uid }));
    handleNotification(1);
    socket.on("getNotifications", (data: any) => {
      setNotifications([...notifications, data]);
    });
  };

  const handleRemoveLike = (doc_id: any, user_uid: any) => {
    dispatch(removeLikeThunk({ docID: doc_id, userID: user_uid }));
    setLike(false);
  };

  const checkLikes = () => {
    if (users.likes?.includes(authUser.uid)) {
      setLike(true);
      setLikeCount(likeCount + 1);
    } else {
      setLike(false);
      setLikeCount(likeCount - 1);
    }
  };
  const checkLength = () => {
    setLikeCount(users?.likes?.length);
  };

  useEffect(() => {
    checkLikes();
    checkLength();
  }, []);

  return (
    <>
      <Card className={classes.cardContainer}>
        <CardHeader
          avatar={<ProfilePicture src={users.user?.dp} type="profile" />}
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title={users.user?.name}
        />
        <CarouselCard src={users?.src} />
        <CardActions disableSpacing>
          {like ? (
            <IconButton
              onClick={() => handleRemoveLike(users.doc_ID, authUser.uid)}
            >
              <FavoriteIcon sx={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => handleLike(users.doc_ID, authUser.uid, type)}
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          )}

          <IconButton onClick={addOpen}>
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <SendSharpIcon />
          </IconButton>
          <IconButton className={classes.cardActionRight}>
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </CardActions>
        {users?.likes?.length ? (
          <Typography ml={2} my={1} fontWeight={"bold"}>
            {likeCount} likes
          </Typography>
        ) : null}
        <Grid
          container
          spacing={4}
          mt={0}
          pt={0}
          borderTop={"1px solid #efefef"}
        >
          {showEmoji && (
            <Grid item position="absolute" zIndex={10} pt={"0px"}>
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </Grid>
          )}
          <Grid
            item
            ml={2}
            p={0}
            onClick={() =>
              setShowEmoji((val: boolean) => {
                return !val;
              })
            }
          >
            <SentimentSatisfiedAltIcon />
          </Grid>
          <Grid item ml={0} pt={"0px"}>
            <TextField
              placeholder="Add a comment..."
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className={classes.text}
              value={comment}
              onChange={inputcomment}
            >
              Add a comment
            </TextField>
          </Grid>
          <Grid item ml={16} pt={"0px"}>
            <Button className={classes.btn} onClick={handlepost}>
              Post
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Box className={classes.boxstyle}>
        <Modal open={Add} onClose={addClose}>
          <Grid container mt={"3%"} ml={"7%"}>
            <PostModal
              user={users.user}
              comment={users.comments}
              src={users.src}
            />
          </Grid>
        </Modal>
      </Box>
      {notifications.map((n: any) => displayNotification(n))}
    </>
  );
};
