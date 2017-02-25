import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgressWithLabel from "../progress_indicator/CircularProgress";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: "250px",
    marginRight: "15px",
    transition: "transform 400ms",
    display: "flex",
    flexDirection: "column",
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
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.cardHeader}>
          <Typography
            className={classes.title}
            color="textSecondary"
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
            <Typography className={classes.pos} color="textSecondary">
              is looking for £{props.targetAmount.toLocaleString()}
              <br />
            </Typography>
          </div>
          <img
            src={props.image}
            alt={props.name}
            className={classes.companyLogo}
          />
        </div>
      </CardContent>
      <CardActions>
        <Link
          to={{ pathname: `/:${props.id}`, state: { lightmode: false } }}
          style={{ textDecoration: "none" }}
        >
          <Button size="small">Review Campaign</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CampaignCard;
