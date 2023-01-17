import Box from "@mui/material/Box";
import { useState } from "react";
import {
  TextField,
  Typography,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import { HighStyle } from "./highstyle";

export const Highlight = () => {
  const [imageUpload, setImageUpload] = useState(null);

  const classes = HighStyle();
  return (
    <Box mt={24} ml={75}>
      <Paper
        elevation={5}
        square
        sx={{ height: 190, width: 400, borderRadius: "12px" }}
      >
        <Typography className={classes.title}>New highlight</Typography>
        <Box className={classes.inputText}>
          <TextField placeholder="Highlight name" />
        </Box>
        {/* <label className={classes.fileInput}>
          select story
          <input type="file" />
        </label> */}
        <Button variant="text" sx={{ width: "100%" }}>
          Next
        </Button>
      </Paper>
    </Box>
  );
};
