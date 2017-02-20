import React, { useState, useEffect } from "react";
import { campaignsAPI } from "../../axios";

function Row({ title, fetchUrl }) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p>Something here</p>
    </div>
  );
}

//   useEffect will run based on a specific condition, as we gave it an empty list [] as condition it will run when the component loads and that's it
// eslint-disable-next-line no-undef

export default Row;
