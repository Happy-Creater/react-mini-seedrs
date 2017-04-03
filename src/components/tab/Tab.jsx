import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//SUBCOMPONENTS
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  tab: {
    color: theme.palette.text.primary,
  },
}));

//COMPONENT
export default function FullWidthTabs(props) {
  //OTHER HOOKS
  const classes = useStyles();
  const theme = useTheme();

  //STATE HOOKS
  const [value, setValue] = React.useState(0);

  //HANDLERS
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  //OUTPUT
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          value={value}
          onChange={handleChange}
          color="primary"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs "
          centered
        >
          <Tab label="Business" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Team" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Documents" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant="body1" gutterBottom align="justify">
            {props.tabsText.tab1}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant="body1" gutterBottom align="justify">
            {props.tabsText.tab2}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography variant="body1" gutterBottom align="justify">
            {props.tabsText.tab3}
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
