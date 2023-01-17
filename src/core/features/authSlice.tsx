import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import authActions from "../actions/authActions";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (user: any, thunkAPI) => {
    try {
      const res = await authActions.UserRegister(user);
      return res;
    } catch (error) {
      const message = error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const signInThunk = createAsyncThunk(
  "user/login",
  async (user: any, thunkAPI) => {
    try {
      const res = await authActions.UserSignIn(user);
      return res;
    } catch (error) {
      const message = error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutThunk = createAsyncThunk("user/logout", async () => {
  try {
    return await authActions.UserLogout();
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

const authInitial = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: false,
  errorMessage: "",
};
export const authSlice = createSlice({
  name: "authentication",
  initialState: authInitial,
  reducers: {
    clearError: (state) => {
      state.error = false;
      state.errorMessage = "";
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = true;
        state.errorMessage = "User already exist";
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user = payload;
        state.error = false;
      })
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = true;
        state.errorMessage =
          "Sorry, you have entered invalid email or password\n. Please double-check it";
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.user = {};
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isLoggedIn = true;
        state.isLoading = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
