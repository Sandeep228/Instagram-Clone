import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const HocFeed = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item xs={10}>
            <WrappedComponent />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };
};

export default HocFeed;
