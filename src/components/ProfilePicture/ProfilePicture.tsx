import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  profilePhoto: {
    verticalAlign: "middle",
    width: "140px!important",
    height: "140px!important",
    borderRadius: 80,
  },
  story: {
    verticalAlign: "middle",
    width: "53px!important",
    height: "53px!important",
    borderRadius: 50,
    outline: "2px solid #d2274c",
    outlineOffset: 2,
  },
  profile: {
    verticalAlign: "middle",
    width: "30px!important",
    height: "30px!important",
    borderRadius: 50,
  },
  highlight: {
    verticalAlign: "middle",
    width: "80px!important",
    height: "80px!important",
    borderRadius: 65,
    outline: "1px solid #a9a9a9",
    outlineOffset: 2,
  },
});

interface outline {
  type: "profile" | "story" | "profilePhoto" | "highlight";
}

interface ProfilePictureProps extends outline {
  src: string;
}

export const ProfilePicture = ({ src, type }: ProfilePictureProps) => {
  const classes = useStyles();
  return (
    <>
      <Avatar
        className={clsx({
          [classes.profile]: type === "profile",
          [classes.story]: type === "story",
          [classes.profilePhoto]: type == "profilePhoto",
          [classes.highlight]: type == "highlight",
        })}
        alt="username"
        src={src}
      />
    </>
  );
};
