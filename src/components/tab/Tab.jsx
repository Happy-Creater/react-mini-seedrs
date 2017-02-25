import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  tab: {
    color: theme.palette.text.primary,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <Tab label="Item One" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Item Two" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Item Three" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant="body1" gutterBottom align="justify">
            Grog blossom spirits scourge of the seven seas Privateer quarter
            grog yo-ho-ho brigantine execution dock grapple black spot Nelsons
            folly. Belaying pin sutler chase main sheet Sea Legs black spot
            clipper gun quarterdeck skysail haul wind mizzenmast. Pieces of
            Eight Blimey aft lad mizzen boatswain Jolly Roger measured fer yer
            chains scuppers mizzenmast ahoy gibbet. Cog cable jack red ensign
            scurvy prow long clothes hornswaggle port fire in the hole matey
            rigging. Hands nipperkin matey crack Jennys tea cup yard Sink me
            plunder gunwalls Spanish Main booty hempen halter wherry. Davy
            Jones' Locker starboard port aft belaying pin wherry jury mast fire
            in the hole Letter of Marque case shot strike colors reef sails.
            <br />
            <br />
            Shrouds mizzenmast hands crow's nest Yellow Jack coffer rope's end
            jack main sheet belaying pin fluke cackle fruit. Yo-ho-ho cackle
            fruit dance the hempen jig scurvy hulk measured fer yer chains
            Yellow Jack run a rig hardtack heave to scourge of the seven seas
            marooned. Spirits provost grapple code of conduct rutters knave
            wherry Nelsons folly scallywag broadside yawl trysail. <br />
            <br />
            Poop deck yo-ho-ho hornswaggle sheet Letter of Marque chase guns
            grapple heave down port Spanish Main code of conduct red ensign.
            Man-of-war furl gally matey bounty snow lanyard Pieces of Eight code
            of conduct parrel barkadeer reef sails. Skysail scurvy galleon list
            crack Jennys tea cup keel sloop cutlass hulk take a caulk trysail
            Nelsons folly. Gangway spyglass squiffy warp Nelsons folly keel
            crow's nest Shiver me timbers heave to chandler dead men tell no
            tales flogging. Sink me no prey, no pay spyglass cutlass salmagundi
            list fire ship jack dead men tell no tales scurvy provost measured
            fer yer chains. Spike barque transom pillage brigantine measured fer
            yer chains driver Plate Fleet loaded to the gunwalls dead men tell
            no tales provost sheet. Prow killick barkadeer loaded to the
            gunwalls hardtack knave Gold Road pinnace Cat o'nine tails rutters
            topmast driver. <br />
            <br />
            Smartly strike colors warp Jack Tar crow's nest quarterdeck lateen
            sail bucko jolly boat jack spyglass fathom. Fathom chase guns Sail
            ho bounty barque black jack lugsail aft Sink me hardtack fore haul
            wind.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
