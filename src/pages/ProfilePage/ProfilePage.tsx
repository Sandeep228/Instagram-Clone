import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Grid,
  Button,
  Modal,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HocFeed from "../hocFeed/HocFeed";
import { ProfileStyle } from "./profile";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { ImageBox } from "../../components/ImageBox/ImageBox";
import { Highlight } from "./Highlight/Highlight";
import { CarouselCard } from "../../components/ Carousel/CarouselCard";
import { PostModal } from "../../components/PostModal/PostModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store";
import { setPictureThunk } from "../../core/features/userSlice";
import Stories from "react-insta-stories";
import { v4 } from "uuid";

function ProfilePage() {
  const classes = ProfileStyle();
  const dispatch = useDispatch<AppDispatch>();
  const userPosts = useSelector(
    (state: RootState) => state.userReducer.userPosts
  );
  const userData = useSelector((state: RootState) => state.userReducer.users);
  const authUser = useSelector((state: any) => state.authReducer.user);
  const [highlightAdd, setAdd] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const [updateClick, setUpdateClick] = useState(false);
  const [modalItem, setModalItem] = useState([""]);
  const [postsSize, setPostsSize] = useState(0);
  const [storyadd, setstory] = useState(false);
  const handleOpen = (src: string[]) => {
    setModalItem(src);
    setOpen(true);
  };
  const handleClose = () => {
    setModalItem([""]);
    setOpen(false);
  };
  const addOpen = () => setAdd(true);
  const addClose = () => setAdd(false);
  const handleUpdate = () => setUpdateClick(true);
  const closeUpdate = () => setUpdateClick(false);
  const storyopen = () => setstory(true);
  const storyclose = () => setstory(false);

  const handleUplaod = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      dispatch(
        setPictureThunk({
          imageUpload: e.target.files[0],
          user: currentUser,
        })
      );
      setUpdateClick(false);
    }
  };

  const postsCount = () => {
    Array.isArray(userPosts) &&
      userPosts.map((val) => {
        if (val.user.email == authUser.email) {
          setPostsSize((current) => current + 1);
        }
      });
  };
  useEffect(() => {
    Array.isArray(userData) &&
      userData.map((val: any) => {
        if (val.email === authUser.email) {
          setCurrentUser(val);
        }
      });
    postsCount();
  }, []);

  const stories = [
    {
      url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${currentUser?.name}`,
        subheading: "Posted 5h ago",
        profileImage: `${currentUser?.dp}`,
      },
    },
    {
      url: "https://images.unsplash.com/photo-1598843531029-2d85c4ac000a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJhbmdhbG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${currentUser?.name}`,
        subheading: "Posted 1day ago",
        profileImage: `${currentUser?.dp}`,
      },
    },
    {
      url: "https://images.unsplash.com/photo-1601752874509-0e350467dc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVja25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${currentUser?.name}`,
        subheading: "Posted 15h ago",
        profileImage: `${currentUser?.dp}`,
      },
    },
  ];

  return (
    <div className={classes.box}>
      <Box mx={20}>
        <Grid container spacing={2}>
          <Grid item={true} xs={2} mx={8} my={3} onClick={handleUpdate}>
            <ProfilePicture src={currentUser?.dp} type="profilePhoto" />
          </Grid>
          <Grid container item xs={8} direction="column">
            <Grid container mt={4}>
              <Grid item={true} xs={4}>
                <h4 className={classes.profileName}>{currentUser?.name}</h4>
              </Grid>
              <Grid item={true} xs={2}>
                <Button variant="text" className={classes.button}>
                  Edit profile
                </Button>
              </Grid>
              <Grid item={true} xs={1} mx={0}>
                <SettingsIcon />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <p>{postsSize} posts</p>
              </Grid>
              <Grid item xs={3}>
                <p> 468 Followers</p>
              </Grid>
              <Grid item xs={3}>
                <p>448 Following </p>
              </Grid>
            </Grid>
            <p>
              GeekyAnts Product/service Design and Development studio turning
              ideas into reality
            </p>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={6}
          my={5}
          className={classes.highlights}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            onClick={storyopen}
          >
            <ProfilePicture
              src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
              type="highlight"
            />
            <p>Mumbai</p>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            onClick={storyopen}
          >
            <ProfilePicture
              src="https://media.gettyimages.com/id/1246464390/photo/the-lovely-vidhan-soudha.jpg?s=612x612&w=gi&k=20&c=zXOBdw0y-O1QneoVc4YKKsV8nFkZVfWZVj4Nhs9pAQM="
              type="highlight"
            />
            <p>Banglore</p>
          </Box>

          <Button
            variant="text"
            color="primary"
            className={classes.addicon}
            onClick={addOpen}
          >
            <AddOutlinedIcon sx={{ fontSize: "44px" }} />
          </Button>
        </Stack>
        <Grid container spacing={2}>
          {Array.isArray(userPosts) &&
            userPosts.map((val) => {
              if (val.user.email == authUser.email) {
                return (
                  <Grid
                    item
                    xs={4}
                    onClick={() => handleOpen(val.src)}
                    key={v4()}
                  >
                    <ImageBox src={val.src} />
                  </Grid>
                );
              }
            })}
        </Grid>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Grid container className={classes.modalContainer}>
          <PostModal user={currentUser} src={modalItem} />
        </Grid>
      </Modal>
      <Modal open={highlightAdd} onClose={addClose}>
        <Box>
          <Highlight />
        </Box>
      </Modal>
      <Modal open={updateClick} onClose={closeUpdate}>
        <Box className={classes.updatePicModal}>
          <Typography>Change Profile Picture</Typography>
          <List>
            <ListItem>
              <label className={classes.updatePicBtn}>
                Upload a photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUplaod(e)}
                />
              </label>
            </ListItem>
            <ListItem>Remove the photo</ListItem>
            <ListItem>Cancel</ListItem>
          </List>
        </Box>
      </Modal>
      <Box className={classes.Box}>
        <Modal
          open={storyadd}
          onClose={storyclose}
          className={classes.storyModal}
        >
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
            keyboardNavigation={true}
          />
        </Modal>
      </Box>
    </div>
  );
}

export default HocFeed(ProfilePage);
