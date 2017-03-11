import React, { useEffect, useState } from "react";
import { campaignsAPI } from "../../axios";
import requests from "../../requests";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { useHistory } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  snackBar: {
    // position: "absolute",
    margin: "65px 15px 0 0",
  },
}));

function Search() {
  //OTHER HOOKS
  let history = useHistory();
  const classes = useStyles();

  //STATE HOOKS
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setNotFound] = useState(false);

  //LOAD ALL RECORDS FOR SEARCH LOGIC
  useEffect(() => {
    async function fetchData() {
      const request = await campaignsAPI.get(requests.fetchAll);
      setCampaigns(request.data);
      return request;
    }
    fetchData();
  }, []);

  //HANDLERS
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNotFound = () => {
    setNotFound(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchedCampaign = campaigns.filter(
      (campaign) => campaign.name === searchTerm
    )[0];
    if (searchedCampaign) {
      setSearchTerm("");

      history.push(`/:${searchedCampaign.id}`);
    } else {
      setNotFound(true);
    }
  };

  //OUTPUT
  return (
    <div>
      <Snackbar
        open={notFound}
        autoHideDuration={3500}
        onClose={handleNotFound}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        className={classes.snackBar}
      >
        <Alert onClose={handleNotFound} severity="error">
          <span role="img" aria-label="ufo">
            🛸
          </span>{" "}
          campaign not found
        </Alert>
      </Snackbar>

      <form
        onSubmit={handleSearch}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Input
          //   disableUnderline={true}
          placeholder="Search"
          inputProps={{ "aria-label": "description" }}
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
}

export default Search;
