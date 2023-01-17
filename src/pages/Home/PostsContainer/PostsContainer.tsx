import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { PostCard } from "../../../components/PostCard/PostCard";
import { getPostsThunk } from "../../../core/features/userSlice";
import { AppDispatch } from "../../../core/store";
import { CircularProgress } from "@mui/material";
const PostsContainer = (props: any) => {
  const userPost = useSelector((state: any) => state.userReducer.userPosts);
  const dispatch = useDispatch<AppDispatch>();

  function loadingSpinner() {
    return (
      <Box marginLeft={28} padding={2}>
        <CircularProgress />
      </Box>
    );
  }
  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  const fetchMoreData = () => {
    const tempData = Item.concat([2]);
    setItem(tempData);
  };

  const [Item, setItem] = useState([1]);
  const imgItems = Item.map((img) => (
    <Stack direction="column" spacing={4} key={img}>
      {Array.isArray(userPost) &&
        userPost.map((val: any) => {
          return <PostCard users={val} key={v4()} />;
        })}
    </Stack>
  ));

  return (
    <React.Fragment>
      <InfiniteScroll
        dataLength={Item.length}
        next={fetchMoreData}
        hasMore={true}
        loader={loadingSpinner()}
      >
        <div>{imgItems}</div>
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default PostsContainer;
