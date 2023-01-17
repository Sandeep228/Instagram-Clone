import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

export const imageUploadThunk = createAsyncThunk(
  "user/createPost",
  async (dataObj: { imageUpload: File; user: Document }) => {
    try {
      const res = await userActions.imageUpload(
        dataObj.imageUpload,
        dataObj.user
      );
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const setPictureThunk = createAsyncThunk(
  "user/profilepicture",
  async (dataObj: { imageUpload: File; user: Document }) => {
    try {
      return await userActions.setDisplayPicture(
        dataObj.imageUpload,
        dataObj.user
      );
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const getPostsThunk = createAsyncThunk("user/fetchPosts", async () => {
  try {
    const res = await userActions.getPosts();
    return res;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const getUsersThunk = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await userActions.getUsers();
    return response;
  } catch (error) {
    return isRejectedWithValue(error);
  }
});

export const addLikeThunk = createAsyncThunk(
  "users/addlike",
  async (dataObj: { docID: any; userID: any }) => {
    try {
      const response = await userActions.addLike(dataObj.docID, dataObj.userID);
      return response;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const addCommentThunk = createAsyncThunk(
  "users/comment",
  async (dataObj: {
    docID: any;
    userID: any;
    name: string;
    dp: string;
    comment: string;
  }) => {
    try {
      const response = await userActions.addComment(dataObj);
      return response;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
export const removeLikeThunk = createAsyncThunk(
  "users/removelike",
  async (dataObj: { docID: any; userID: any }) => {
    try {
      const response = await userActions.postDislike(
        dataObj.docID,
        dataObj.userID
      );
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

const userInitial = {
  //   authUser: {},
  //   id: "",
  users: {},
  userPosts: {},
  isLoading: false,
  dbUpdate: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState: userInitial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(imageUploadThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(imageUploadThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(imageUploadThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.userPosts = payload;
        state.isLoading = false;
      })
      .addCase(getPostsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(getUsersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsersThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
