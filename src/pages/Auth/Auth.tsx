import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import { AuthStyles } from "./styles";
import { useDispatch } from "react-redux";
import { clearError } from "../../core/features/authSlice";

function Auth() {
  const [userExist, setUserExist] = useState(true);
  const dispatch = useDispatch();
  const classes = AuthStyles();
  const authToggle = () => {
    setUserExist(!userExist);
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearError());
    }, 20000);
  });
  return (
    <React.Fragment>
      <Grid container className={classes.parentContainer}>
        <Grid container className={classes.childContainer}>
          <Grid item xs={12}>
            <Grid>
              <img
                className={classes.titleLogo}
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              />
            </Grid>
            {userExist ? <Login /> : <Signup />}
          </Grid>
        </Grid>
        <Grid container item className={classes.authFooter}>
          <Typography>
            {userExist ? "Don't have an account?" : "Have an account?"}

            <Button onClick={authToggle}>
              {userExist ? "SIGN UP" : "LOGIN"}
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Auth;
