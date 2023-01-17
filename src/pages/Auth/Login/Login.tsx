import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../core/store";
import { AppDispatch } from "../../../core/store";
import { signInThunk } from "../../../core/features/authSlice";
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import UserLoginInterface from "../../../interface/UserLoginInterface";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { pattern } from "../../../constants/Validationpattern";
import { AuthStyles } from "../styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routepath";

const Login = () => {
  const classes = AuthStyles();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector(
    (state: RootState) => state.authReducer.isLoading
  );
  const error = useSelector((state: RootState) => state.authReducer.error);
  const errorMessage = useSelector(
    (state: any) => state.authReducer.errorMessage
  );

  const { register, handleSubmit, formState } = useForm<UserLoginInterface>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const submitHandler = async (data: UserLoginInterface) => {
    await dispatch(signInThunk(data));
    navigate(ROUTES.HOME_PAGE);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid className={classes.formContainer}>
          <TextField
            placeholder="Phone number, username, mail address"
            className={classes.inputField}
            {...register("loginId", {
              required: "enter username",
              pattern: {
                value: RegExp(pattern.EmailPattern),
                message: "enter valid email",
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.loginId ? <CancelOutlinedIcon /> : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.loginId)}
          />
          <TextField
            placeholder="Password"
            type="password"
            className={classes.inputField}
            {...register("loginPassword", { required: "Password required" })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.loginPassword ? (
                    <CancelOutlinedIcon />
                  ) : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.loginPassword)}
          />
          <Button type="submit" className={classes.authButton}>
            {isLoading ? "Loading..." : "LOGIN"}
          </Button>
          <FormHelperText className={classes.errorMessage}>
            {formState?.errors?.loginId?.message || ""}
            <br />
            {formState?.errors?.loginPassword?.message || ""}
            <br />
            {error ? `${errorMessage}` : null}
          </FormHelperText>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default Login;
