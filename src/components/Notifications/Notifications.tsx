import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { v4 } from "uuid";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { makeStyles } from "@mui/styles";
import userActions from "../../core/actions/userAction";

const useStyles = makeStyles({
  spanstyle: {
    marginLeft: "6px",
  },
});

const Notifications = ({ messages }: { messages: any }) => {
  console.log(messages);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Box p={3} height={"100vh"}>
        <Box>
          <Typography variant="h5">Notifications</Typography>
        </Box>
        <List>
          {messages?.notifications?.map((val: any) => {
            let action;
            if (val.type === 1) {
              action = "liked";
            } else if (val.type === 2) {
              action = "commented";
            } else {
              action = "";
            }

            let msg = `${val.senderName} ${action}   your post.`;
            return (
              <ListItem key={v4()}>
                <ProfilePicture type="profile" src={messages?.dp} />{" "}
                <span className={classes.spanstyle}>
                  {" "}
                  <Typography>{msg}</Typography>
                </span>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </React.Fragment>
  );
};

export default Notifications;
