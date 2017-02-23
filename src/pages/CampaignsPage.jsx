import React from "react";
import Header from "../components/header/Header";
import Row from "../components/row/Row";
import requests from "../requests";
import { Grid } from "@material-ui/core";

function CampaignsPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} md={1} lg={2} />
        <Grid item xs={12} md={10} lg={8}>
          <Row title="All campaigns" fetchUrl={requests.fetchOpen} />
          <Row title="FinTech companies" fetchUrl={requests.fetchFintech} />
          <Row title="Open for investment" fetchUrl={requests.fetchOpen} />
          <Row
            title="Millionaire target"
            fetchUrl={requests.fetchSevenFigures}
          />
          <Row title="Small but gold" fetchUrl={requests.fetchOneFifty} />
          <Row title="Food & Bev" fetchUrl={requests.fetchFood} />
        </Grid>
        <Grid item xs={false} md={1} lg={2} />
      </Grid>
    </Grid>
  );
}

export default CampaignsPage;
