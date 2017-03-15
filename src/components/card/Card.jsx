import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgressWithLabel from "../progress_indicator/CircularProgress";
import { BrowserRouter, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: "250px",
    minHeight: "300px",
    marginRight: "15px",
    transition: "transform 400ms",
    display: "flex",
    flexDirection: "column",
    padding: "0 10px 20px",
    justifyContent: "space-between",
    "&:hover": {
      transform: "scale(1.07)",
    },
  },

  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyLogo: {
    height: "45px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CampaignCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <BrowserRouter>
      <Link
        to={{ pathname: `/:${props.campaignId}` }}
        style={{ textDecoration: "none" }}
      >
        <Card
          className={classes.root}
          style={{ backgroundColor: theme.palette.secondary.main }}
        >
          <CardContent>
            <div className={classes.cardHeader}>
              <Typography
                className={classes.title}
                color="inherit"
                gutterBottom
              >
                {props.sector}
              </Typography>

              <CircularProgressWithLabel
                variant="determinate"
                value={props.percentageRaised}
              />
            </div>
            <div>
              <div>
                <Typography variant="h5" component="h2">
                  {props.name}
                </Typography>
                <Typography
                  className={classes.pos}
                  color="inherit"
                  gutterBottom
                >
                  is looking for{" "}
                  <strong>£{props.targetAmount.toLocaleString()}</strong>
                </Typography>
              </div>
              <img
                src={props.image}
                alt={props.name}
                className={classes.companyLogo}
              />
            </div>
          </CardContent>
          <Typography align="center">
            <Button variant="outlined" color="primary" size="small">
              Review Campaign
            </Button>
          </Typography>
        </Card>
      </Link>
    </BrowserRouter>
  );
}

export default CampaignCard;
