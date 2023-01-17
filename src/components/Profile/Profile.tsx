import React, { useState, useEffect } from "react";
import { Box, Stack, Grid, Button, Modal } from "@mui/material";
import { UserStyle } from "./profile1";
import SettingsIcon from "@mui/icons-material/Settings";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { ImageBox } from "../ImageBox/ImageBox";
import { PostModal } from "../PostModal/PostModal";
import { useSelector } from "react-redux";
import { RootState } from "../../core/store";
import Stories from "react-insta-stories";
import { v4 } from "uuid";
import { useLocation } from "react-router-dom";
import HocFeed from "../../pages/hocFeed/HocFeed";

function Profile() {
  const classes = UserStyle();
  const userPosts = useSelector(
    (state: RootState) => state.userReducer.userPosts
  );
  const userData = useSelector((state: RootState) => state.userReducer.users);
  const [currentUser, setCurrentUser] = useState<any>();
  const [open, setOpen] = React.useState(false);
  const [modalItem, setModalItem] = useState([""]);
  const [postsSize, setPostsSize] = useState(0);
  const [storyadd, setstory] = useState(false);
  const location = useLocation();
  const { from } = location.state || { from: "m3gsYCNw90WWkC1hbQXnUcUFyQ42" };

  const handleOpen = (src: string[]) => {
    setModalItem(src);
    setOpen(true);
  };
  const handleClose = () => {
    setModalItem([""]);
    setOpen(false);
  };
  const storyopen = () => setstory(true);
  const storyclose = () => setstory(false);

  const postsCount = () => {
    Array.isArray(userPosts) &&
      userPosts.map((val) => {
        if (val.user.uid == from) {
          setPostsSize((current) => current + 1);
        }
      });
  };
  useEffect(() => {
    Array.isArray(userData) &&
      userData.map((val: any) => {
        if (val.uid === from) {
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
          <Grid item={true} xs={2} mx={8} my={3}>
            <ProfilePicture src={currentUser?.dp} type="profilePhoto" />
          </Grid>
          <Grid container item xs={8} direction="column">
            <Grid container mt={4}>
              <Grid item={true} xs={4}>
                <h4 className={classes.profileName}>{currentUser?.name}</h4>
              </Grid>
              <Grid item={true} xs={2}>
                <Button variant="text" className={classes.button}>
                  Follow
                </Button>
              </Grid>
              <Grid item={true} xs={1} mx={0}>
                <SettingsIcon />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <p> {postsSize} posts</p>
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
        </Stack>
        <Grid container spacing={2}>
          {Array.isArray(userPosts) &&
            userPosts.map((val) => {
              if (val.user.uid == from) {
                return (
                  <Grid
                    item
                    xs={4}
                    onClick={() => handleOpen(val?.src)}
                    key={v4()}
                  >
                    <ImageBox src={val?.src} />
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

      <Box className={classes.box}>
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

export default HocFeed(Profile);
