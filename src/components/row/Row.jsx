import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from "react";
import { campaignsAPI } from "../../axios";
import CampaignCard from "../card/Card";

//STYLES
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  rowCards: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "20px",
  },
  row: {
    marginLeft: "20px",
    textAlign: "center",
  },
});

//FUNCTIONAL COMPONENT
function Row({ title, fetchUrl, subtitle }) {
  //OTHER HOOKS
  const classes = useStyles();

  //STATE HOOKS
  const [campaigns, setCampaigns] = useState([]);

  //API REQUESTS
  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(fetchUrl);
      setCampaigns(request.data);
      return request;
    }
    fetchData();
  }, []);

  //OUTPUT
  return (
    <div className={classes.row}>
      <Typography variant="h4" style={{ marginTop: "25px" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {subtitle} <br />
      </Typography>
      <div className={classes.rowCards}>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaignId={campaign.id}
            className={classes.rowCard}
            name={campaign.name}
            percentageRaised={campaign.percentage_raised}
            targetAmount={campaign.target_amount}
            sector={campaign.sector}
            image={campaign.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
