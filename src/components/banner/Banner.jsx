import { Button, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { campaignsAPI } from "../../axios";
import requests from "../../requests";

function Banner() {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  const [campaign, setCampaign] = useState([]);
  const synonymOfChanging = [
    "changing",
    "revolutionazing",
    "disrupting",
    "improving",
    "revamping",
    "upgrading",
    "transforming",
    "enhancing",
    "modernizing",
    "the poster child of",
    "the rising star of",
  ];
  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(requests.fetchOpen);
      setCampaign(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
    }
    fetchData();
  }, []);
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} md={1} lg={2} />
        <Grid item xs={10} md={7} lg={7}>
          <div
            style={{
              height: "100%",
              display: "flex",
              maxWidth: "50%",
              flexDirection: "column",
              justifyContent: "center",
              margin: "15px 0 50px 35px",
            }}
          >
            <Typography variant="h5" color="inherit" gutterBottom>
              Hey explorer!
            </Typography>
            <Typography variant="body1" color="inherit">
              {campaign.name} is{" "}
              <strong>
                {
                  synonymOfChanging[
                    Math.floor(Math.random() * synonymOfChanging.length)
                  ]
                }
              </strong>{" "}
              the {campaign.sector} industry in{" "}
              <strong>{campaign.country}</strong>.
            </Typography>

            <Link
              to={{ pathname: `/:${campaign.id}` }}
              style={{ textDecoration: "none", marginTop: "20px" }}
            >
              <Button variant="contained" color="primary">
                <Typography variant="button" color="inherit">
                  Check it out
                </Typography>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={2} md={3} lg={2}>
          <div
            style={
              theme.palette.primary.main === "#7FBB30"
                ? {
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 50%",
                    marginLeft: "-150px",
                    backgroundColor: "inherit",
                    backgroundImage: `url(https://media.giphy.com/media/KApag9isJD1l7y6jmW/giphy.gif)`,
                    height: "45vw",
                    maxHeight: "300px",
                  }
                : {
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 50%",
                    marginLeft: "-150px",
                    backgroundColor: "inherit",
                    backgroundImage: `url(https://media.giphy.com/media/L3EZ0FdfMbjgNEpNLC/giphy.gif)`,
                    height: "45vw",
                    maxHeight: "300px",
                  }
            }
          ></div>
        </Grid>
        <Grid item xs={false} md={1} lg={2} />
      </Grid>
    </Grid>
  );
}

export default Banner;
