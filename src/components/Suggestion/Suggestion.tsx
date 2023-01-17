import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { v4 } from "uuid";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { homeStyles } from "../../pages/Home/HomeStyles";

interface SuggestionProps {
  users: any;
  currentUser: any;
}

export const Suggestion = ({ users, currentUser }: SuggestionProps) => {
  const classes = homeStyles();

  return (
    <>
      <Typography mx={2} ml={6} color="#8e8e8e" fontWeight={"500"}>
        Suggestions for you
      </Typography>
      <br />

      {Array.isArray(users) &&
        users.map((val: any) => {
          if (val?.uid !== currentUser?.uid) {
            return (
              <div key={v4()}>
                <Grid container direction="row" mx={6}>
                  <Box
                    display="flex"
                    justifySelf="center"
                    alignSelf="center"
                    marginRight={"12px"}
                  >
                    <ProfilePicture src={val?.dp} type="profile" />
                  </Box>
                  <Grid className={classes.cardText}>
                    <Link
                      to={`/profile/${val?.name}`}
                      state={{ from: val?.uid }}
                    >
                      {val?.name}
                    </Link>
                  </Grid>
                </Grid>
                <br />
              </div>
            );
          }
        })}
      <br />
    </>
  );
};
