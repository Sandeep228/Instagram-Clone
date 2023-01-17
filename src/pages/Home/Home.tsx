import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HocFeed from "../hocFeed/HocFeed";
import StoryContainer from "./StoryContainer/StoryContainer";
import PostsContainer from "./PostsContainer/PostsContainer";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { homeStyles } from "./HomeStyles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routepath";
import { RootState } from "../../core/store";
import { Suggestion } from "../../components/Suggestion/Suggestion";
import { io } from "socket.io-client";

const Home = () => {
  const classes = homeStyles();
  const authUser = useSelector((state: any) => state.authReducer.user);
  const allUsers = useSelector((state: RootState) => state.userReducer.users);
  const [socket, setSocket] = useState<any>(null);

  const [currentUser, setUser] = useState<any>();

  useEffect(() => {
    Array.isArray(allUsers) &&
      allUsers.map((val: any) => {
        if (val.uid === authUser.uid) {
          setUser(val);
        }
      });
  });

  useEffect(() => {
    setSocket(io("http://localhost:8000"));
  }, []);

  return (
    <React.Fragment>
      <Grid container className={classes.parentContainer}>
        <Grid item>
          <Box className={classes.storyContainer}>
            <StoryContainer />
          </Box>
          <Box className={classes.postsContainer}>
            <PostsContainer socket={socket} />
          </Box>
        </Grid>
        <Grid item>
          <Grid display="flex" flexDirection="row" padding={"3rem"}>
            <Grid container direction="row">
              <Box
                display="flex"
                justifySelf="center"
                alignSelf="center"
                marginRight={"12px"}
                className={classes.cardPicture}
              >
                <ProfilePicture src={currentUser?.dp} type="story" />
              </Box>
              <Grid className={classes.cardText}>
                <Link to={ROUTES.PROFILE_PAGE}>{authUser.name}</Link>
              </Grid>
            </Grid>
            <Grid
              display="flex"
              justifySelf="center"
              alignSelf="center"
              className={classes.cardAction}
            >
              <Typography>Switch</Typography>
            </Grid>
          </Grid>
          <Suggestion users={allUsers} currentUser={currentUser} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default HocFeed(Home);
