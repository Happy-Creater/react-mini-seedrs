import { Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { campaignsAPI } from "../../axios";
import requests from "../../requests";

function Banner() {
  const theme = useTheme();
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
    <div
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "95% 50%",
        backgroundColor: theme.palette.primary.light,
        backgroundImage: `url(https://media.giphy.com/media/L3EZ0FdfMbjgNEpNLC/giphy.gif)`,
        height: "50vh",
        minHeight: "200px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          maxWidth: "50%",
          flexDirection: "column",
          alignContent: "flex-end",
          justifyContent: "center",
          marginLeft: "10%",
        }}
      >
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Hey explorer!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {campaign.name} is{" "}
          <strong>
            {
              synonymOfChanging[
                Math.floor(Math.random() * synonymOfChanging.length)
              ]
            }
          </strong>{" "}
          the {campaign.sector} industry in <strong>{campaign.country}</strong>.
        </Typography>

        <Link
          to={{ pathname: `/:${campaign.id}` }}
          style={{ textDecoration: "none", marginTop: "20px" }}
        >
          <Button variant="contained" color="primary">
            <Typography variant="button" color="textSecondary">
              Check it out
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
