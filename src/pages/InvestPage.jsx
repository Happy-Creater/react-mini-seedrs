import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { campaignsAPI, investmentsAPI } from "../axios";
import { Grid } from "@material-ui/core";
import Header from "../components/header/Header";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainImage: {
    height: "50px",
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
      {/* <Grid item>
        <Header />
      </Grid> */}
      <Grid item container>
        <Grid item xs={2} md={3} />
        <Grid item xs={8} md={6}>
          <img
            src={campaign.image}
            alt={campaign.name}
            className={classes.mainImage}
          />
          <Typography variant="h2">{campaign.name}</Typography>
        </Grid>
        <Grid item xs={2} md={3} />
      </Grid>
    </Grid>
  );
}

export default InvestPage;
