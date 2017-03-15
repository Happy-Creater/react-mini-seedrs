import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { campaignsAPI } from "../axios";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinearProgress from "../components/progress/LinearProgress";
import Tabs from "../components/tab/Tab";
import Invest from "../components/form/investForm";

const useStyles = makeStyles({
  avatar: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "scale-down",
    border: "0.5px solid #e3e3e3",
    padding: "5px",
    margin: "15px",
    backgroundColor: "white",
  },
  titleFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "5px 25px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(1.3)",
  },
  progress: {
    padding: "5px 25px 20px",
  },
});

function InvestPage(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { id } = props.match.params;

  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(id.substring(1));
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
          <div className={classes.titleFlex}>
            {" "}
            <img
              src={campaign.image}
              alt={campaign.name}
              className={classes.avatar}
            />
            <div>
              {" "}
              <Typography variant="h4">{campaign.name}</Typography>
              <Typography variant="h6">
                Target of £{campaign.target_amount}
              </Typography>
            </div>
          </div>
          <div className={classes.infoFlex}>
            {campaign.is_open ? (
              <Invest
                name={campaign.name}
                campaignId={id.substring(1)}
                multiple={campaign.investment_multiple}
                className={classes.cta}
                campaignName={campaign.name}
              />
            ) : (
              <Button
                variant="outlined"
                disabled={true}
                className={classes.cta}
              >
                Closed
              </Button>
            )}
            <Typography variant="body2">{bull}</Typography>
            <Typography variant="body2">{campaign.sector}</Typography>
            <Typography variant="body2">{bull}</Typography>
            <Typography variant="body2">{campaign.country}</Typography>
            <Typography variant="body2">{bull}</Typography>
            <Typography variant="body2">
              {campaign.investment_count} investments
            </Typography>
          </div>
          <div className={classes.progress}>
            <LinearProgress
              value={parseInt(campaign.percentage_raised)}
              color="primary"
            />
          </div>
          <Tabs itemOne="Company" itemTwo="Team" itemThree="Documents" />
        </Grid>

        <Grid item xs={false} md={2} />
      </Grid>
    </Grid>
  );
}

export default InvestPage;
