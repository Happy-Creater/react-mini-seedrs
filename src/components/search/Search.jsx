import React, { useEffect, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { campaignsAPI } from "../../axios";
import requests from "../../requests";
import { useHistory } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.25),
    },
    width: "90%",
    marginLeft: "25px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "65%",
      //   marginLeft: theme.spacing(4),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
  snackBar: {
    margin: "65px 15px 0 0",
  },
  iconButton: {
    color: "#C2C2C2",
  },
}));

export default function SearchAppBar() {
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

  return (
    <div className={classes.root}>
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

      <div className={classes.search}>
        <form
          onSubmit={handleSearch}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div className={classes.searchIcon}>
            <SearchIcon className={classes.iconButton} />
          </div>
          <InputBase
            onChange={handleChange}
            value={searchTerm}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </form>
      </div>
    </div>
  );
}
