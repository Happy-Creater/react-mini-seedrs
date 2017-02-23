import {
  AppBar,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Brightness2, WbSunny } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" inputProps={{ "aria-label": "search" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.typographyStyles}>
          Mini Seedrs
        </Typography>
        <IconButton>
          <Brightness2 />
          <WbSunny />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
