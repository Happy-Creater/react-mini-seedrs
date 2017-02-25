import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function LinearProgressWithLabel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress
            variant="determinate"
            value={props.value > 100 ? 100 : props.value}
            color={props.color}
          />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color={props.color}>
            {props.value}%
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default LinearProgressWithLabel;
