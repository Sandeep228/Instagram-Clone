import { Stack, Grid, Box, Modal } from "@mui/material";
import { ContainerStyles } from "./StoryContainerStyles";
import { ProfilePicture } from "../../../components/ProfilePicture/ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../core/store";
import { v4 } from "uuid";
import React, { useEffect, useState } from "react";
import { getUsersThunk } from "../../../core/features/userSlice";
import Stories from "react-insta-stories";

const StoryContainer = () => {
  const classes = ContainerStyles();
  const [storyadd, setAdd] = useState(false);
  const [userStory, setUserStory] = useState<any>();
  const usersData = useSelector((state: RootState) => state.userReducer.users);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = (val: any) => {
    setUserStory(val);
    setAdd(true);
  };
  const storyclose = () => {
    setUserStory(null);
    setAdd(false);
  };

  const stories = [
    {
      url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${userStory?.name}`,
        subheading: "Posted 5h ago",
        profileImage: `${userStory?.dp}`,
      },
    },
    {
      url: "https://images.unsplash.com/photo-1598843531029-2d85c4ac000a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJhbmdhbG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${userStory?.name}`,
        subheading: "Posted 5h ago",
        profileImage: `${userStory?.dp}`,
      },
    },
    {
      url: "https://images.unsplash.com/photo-1601752874509-0e350467dc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVja25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      header: {
        heading: `${userStory?.name}`,
        subheading: "Posted 5h ago",
        profileImage: `${userStory?.dp}`,
      },
    },
  ];
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return (
    <React.Fragment>
      <Grid>
        <Stack direction="row" spacing={2} className={classes.parentContainer}>
          {Array.isArray(usersData) &&
            usersData.map((val: any, index: any) => {
              return (
                <Box
                  className={classes.storyItem}
                  key={v4()}
                  onClick={() => handleOpen(val)}
                >
                  <ProfilePicture src={val.dp} type="story" />
                  <p>{val.name}</p>
                </Box>
              );
            })}
        </Stack>
      </Grid>
      <Modal
        open={storyadd}
        onClose={storyclose}
        className={classes.modalstyle}
      >
        <Box className={classes.boxstyle}>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
            keyboardNavigation={true}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default StoryContainer;
