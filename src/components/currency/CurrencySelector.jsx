import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

//DATA
const currencies = [
  {
    value: "GBP",
    label: "£",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "EUR",
    label: "€",
  },
];

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

//COMPONENT
export default function MultilineTextFields(props) {
  //OTHER HOOKS
  const classes = useStyles();

  //STATE HOOKS
  const [currency, setCurrency] = React.useState("EUR");

  //HANDLERS
  const handleChange = (event) => {
    setCurrency(event.target.value);
    props.onChange(event);
  };

  //OUTPUT
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        value={currency}
        name="currency"
        onChange={handleChange}
        helperText="Please select your currency"
        color="primary"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
