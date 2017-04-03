import React from "react";
import Row from "../components/row/Row";
import requests from "../requests";
import Banner from "../components/banner/Banner";

function CampaignsPage() {
  return (
    <div>
      <Banner />
      <Row
        title="All campaigns"
        fetchUrl={requests.fetchOpen}
        subtitle="Discover the amazing companies that raise with use, past and present"
      />
      <Row
        title="FinTech companies"
        fetchUrl={requests.fetchFintech}
        subtitle="Join the mission to change the financial industry once and for all"
      />
      <Row
        title="Open for investment"
        fetchUrl={requests.fetchOpen}
        subtitle="See who is currently accepting investment and take your share"
      />
      <Row
        title="Millionaire target"
        fetchUrl={requests.fetchSevenFigures}
        subtitle="Back the ambitious scale ups that are shooting for seven figures"
      />
      <Row
        title="Small but gold"
        fetchUrl={requests.fetchOneFifty}
        subtitle="Spot those unicorns before everyone else"
      />
      <Row
        title="Food & Bev"
        fetchUrl={requests.fetchFood}
        subtitle="Shape the future of food to support an ever growing population"
      />
    </div>
  );
}

export default CampaignsPage;
