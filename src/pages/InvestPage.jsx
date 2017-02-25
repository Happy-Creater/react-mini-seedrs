import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { campaignsAPI, investmentsAPI } from "../axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "../components/progress_indicator/LinearProgress";
import Tabs from "../components/tab/Tab";

const useStyles = makeStyles({
  avatar: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "scale-down",
    border: "0.5px solid #e3e3e3",
    padding: "3px",
    margin: "17px",
    backgroundColor: "white",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  progress: {
    padding: "5px 25px 20px",
  },
});

function InvestPage(props) {
  const classes = useStyles();

  const { id } = props.match.params;

  const [campaign, setCampaign] = useState([]);

  //   useEffect will run based on a specific condition, as we gave it fetchUrl as
  //   condition it will run when the component loads and everytime fetchUrl changes

  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(id.substring(1));
      console.table(request.data);
      setCampaign(request.data);
      return request;
    }
    fetchData();
  }, [id]);

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
          <div className={classes.title}>
            {" "}
            <img
              src={campaign.image}
              alt={campaign.name}
              className={classes.avatar}
            />
            <Typography variant="h4">{campaign.name}</Typography>
          </div>
          <div className={classes.progress}>
            <LinearProgress
              value={campaign.percentage_raised}
              color="primary"
            />
            <Tabs itemOne="Company" itemTwo="Team" itemThree="Documents" />
            {/* Tabs component with: Idea - Key Information - Team - Investors - Documents */}
            {/* Lorem ipsum for all tabs except Investors: try to get investor names and amounts listed (can we though?? there is no get api for invs) */}
          </div>
        </Grid>

        <Grid item xs={false} md={2} />
      </Grid>
    </Grid>
  );
}

export default InvestPage;
