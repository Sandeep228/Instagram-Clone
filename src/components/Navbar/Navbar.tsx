import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../core/store";
import { logoutThunk } from "../../core/features/authSlice";
import {
  Grid,
  Paper,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Menu,
  ListItem,
  Typography,
  Collapse,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItem from "./NavbarItem/NavbarItem";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { menuIcons } from "../../constants/ImageUrls";
import { ROUTES } from "../../constants/routepath";
import { v4 } from "uuid";
import { getPostsThunk, getUsersThunk } from "../../core/features/userSlice";
import Notifications from "../Notifications/Notifications";
import { NavbarStyles } from "./navStyles";
import userActions from "../../core/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const authUser = useSelector((state: any) => state.authReducer.user);
  const userData = useSelector((state: any) => state.userReducer.users);
  const [currentUser, setCurrentUser] = useState<any>();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [messages, setMessages] = useState<any>();
  const isMenuOpen = Boolean(anchorEl);
  const classes = NavbarStyles();
  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    dispatch(logoutThunk());
  };
  const logoOnClick = () => {
    navigate(ROUTES.HOME_PAGE);
  };
  const profileOnClick = () => {
    navigate(ROUTES.PROFILE_PAGE);
  };

  const notificationHandler = async () => {
    let messages = await userActions.fetchNotifications(authUser.uid);
    setMessages(messages);
    setNotifOpen(!notifOpen);
  };
  useEffect(() => {
    dispatch(getPostsThunk());
    dispatch(getUsersThunk());
    Array.isArray(userData) &&
      userData.map((val: any) => {
        if (val.email === authUser.email) {
          setCurrentUser(val);
        }
      });
  }, []);
  return (
    <React.Fragment>
      <Grid container className={classes.navbarContainer}>
        <Grid>
          <Grid item className={classes.navbarTitle}>
            <img
              className={classes.navbarLogo}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              onClick={logoOnClick}
            />
          </Grid>
          <Grid item className={classes.listContainer}>
            {Object.entries(menuIcons).map(([key, value]) => (
              <NavbarItem
                label={key}
                imgSrc={value}
                key={v4()}
                fun={notificationHandler}
              />
            ))}
            <Grid item className={classes.listStyle} onClick={profileOnClick}>
              <ProfilePicture src={currentUser?.dp} type="profile" />
              <Typography>Profile</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.menuGrid}>
          <ListItem
            className={classes.menuButton}
            onClick={(event) => handleMenuClick(event)}
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText>More</ListItemText>
          </ListItem>

          <Paper>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem className={classes.menuItem} onClick={logoutHandler}>
                <Typography>Logout</Typography>
              </MenuItem>
            </Menu>
          </Paper>
        </Grid>
        <Collapse in={notifOpen} orientation="horizontal">
          <Box
            position="absolute"
            width={"300px"}
            zIndex={100}
            sx={{ backgroundColor: "#ffffff" }}
            borderRadius={4}
            boxShadow={2}
            onBlur={notificationHandler}
          >
            <Notifications messages={messages} />
          </Box>
        </Collapse>
      </Grid>
    </React.Fragment>
  );
};

export default Navbar;
