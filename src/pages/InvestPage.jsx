import React, { useState, useEffect } from "react";
import { campaignsAPI, investmentsAPI } from "../axios";

function InvestPage(props) {
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
    <div>
      <h2>Hello {campaign.name}</h2>
    </div>
  );
}

export default InvestPage;
