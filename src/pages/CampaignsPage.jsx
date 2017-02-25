import React from "react";
import Header from "../components/header/Header";
import Row from "../components/row/Row";
import requests from "../requests";
import { Grid } from "@material-ui/core";

function CampaignsPage() {
  return (
    <div>
      {/* <Header /> */}
      <Row title="All campaigns" fetchUrl={requests.fetchOpen} />
      <Row title="FinTech companies" fetchUrl={requests.fetchFintech} />
      <Row title="Open for investment" fetchUrl={requests.fetchOpen} />
      <Row title="Millionaire target" fetchUrl={requests.fetchSevenFigures} />
      <Row title="Small but gold" fetchUrl={requests.fetchOneFifty} />
      <Row title="Food & Bev" fetchUrl={requests.fetchFood} />
    </div>
  );
}

export default CampaignsPage;
