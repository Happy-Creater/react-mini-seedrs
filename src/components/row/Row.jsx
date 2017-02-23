import React, { useState, useEffect } from "react";
import { campaignsAPI } from "../../axios";

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
    <div>
      <h2>{title}</h2>
      <div>
        {campaigns.map((campaign) => (
          <img src={campaign.image} />
        ))}
      </div>
    </div>
  );
}

export default Row;
