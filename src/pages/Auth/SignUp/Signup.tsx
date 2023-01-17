import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../core/store";
import { registerThunk } from "../../../core/features/authSlice";
import { AppDispatch } from "../../../core/store";
import UserRegisterInterface from "../../../interface/UserRegisterInterface";
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { pattern } from "../../../constants/Validationpattern";
import { ROUTES } from "../../../constants/routepath";
import { AuthStyles } from "../styles";

const Signup = () => {
  const classes = AuthStyles();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector(
    (state: RootState) => state.authReducer.isLoading
  );
  const error = useSelector((state: RootState) => state.authReducer.error);
  const errorMessage = useSelector(
    (state: RootState) => state.authReducer.errorMessage
  );

  const { register, handleSubmit, formState } = useForm<UserRegisterInterface>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const submitHandler = async (data: UserRegisterInterface) => {
    await dispatch(registerThunk(data));
    navigate(ROUTES.HOME_PAGE);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid className={classes.formContainer}>
          <TextField
            placeholder="mobile number or email address"
            className={classes.inputField}
            {...register("email", {
              required: "user email is required",
              pattern: {
                value: RegExp(pattern.EmailPattern),
                message: "enter valid email",
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.email ? <CancelOutlinedIcon /> : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.username)}
          />
          <TextField
            placeholder="Fullname"
            className={classes.inputField}
            {...register("name", { required: "Full name is required" })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.name ? <CancelOutlinedIcon /> : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.name)}
          />
          <TextField
            placeholder="Username"
            className={classes.inputField}
            {...register("username", { required: "username is required" })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.username ? <CancelOutlinedIcon /> : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.username)}
          />
          <TextField
            placeholder="Password"
            type="password"
            className={classes.inputField}
            {...register("password", {
              required: "password required",
              minLength: {
                value: 8,
                message: "password length should be minimun than 8 ",
              },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formState?.errors?.password ? <CancelOutlinedIcon /> : null}
                </InputAdornment>
              ),
            }}
            error={Boolean(formState?.errors?.password)}
          />
          <Button type="submit" className={classes.authButton}>
            {isLoading ? "Loading..." : "SIGN UP"}
          </Button>
          <FormHelperText className={classes.errorMessage}>
            {formState?.errors?.email?.message || ""}
            <br />
            {formState?.errors?.name?.message || ""}
            <br />
            {formState?.errors?.username?.message || ""}
            <br />
            {formState?.errors?.password?.message || ""}
            <br />
            {error ? `${errorMessage}` : null}
          </FormHelperText>
        </Grid>
      </form>
    </React.Fragment>
  );
};
export default Signup;
