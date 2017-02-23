import React, { useState, useEffect } from "react";
import { campaignsAPI } from "../../axios";
import CampaignCard from "../card/Card";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [campaigns, setCampaigns] = useState([]);

  //   useEffect will run based on a specific condition, as we gave it fetchUrl as
  //   condition it will run when the component loads and everytime fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(fetchUrl);
      //   console.table(request.data);
      setCampaigns(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__cards">
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            className="row__card"
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

{
  /* <img
className="row__card"
src={campaign.image}
alt={campaign.name}
></img> */
}
