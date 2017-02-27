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
          <Typography variant="body1" gutterBottom align="justify">
            Cupcake ipsum dolor sit. Amet cookie caramels I love powder
            chocolate cake tiramisu dragée jelly. Jelly beans pudding jelly
            beans biscuit gingerbread marshmallow marshmallow apple pie cake.
            Marshmallow I love dessert. I love jujubes I love sweet pastry ice
            cream gummi bears powder. <br />
            <br />I love gummi bears liquorice bear claw candy donut wafer
            tootsie roll lollipop. Donut macaroon ice cream. Sugar plum dragée
            gingerbread sugar plum tart. Cupcake brownie toffee I love toffee.
            Sweet roll bear claw donut bonbon cotton candy danish pudding I
            love. Muffin wafer lollipop I love. Cheesecake apple pie macaroon
            apple pie ice cream. Cookie lollipop chupa chups sweet roll tart
            gummies I love bonbon liquorice. I love I love pie. Powder marzipan
            jujubes ice cream muffin I love chupa chups chocolate. Tart
            liquorice lollipop topping muffin. Cake tiramisu topping marzipan
            cupcake muffin. Pie toffee cheesecake marshmallow chocolate
            caramels. Pudding pudding sweet roll apple pie pudding chocolate
            chupa chups dessert pie. Halvah pie fruitcake powder gummies
            brownie. <br />
            <br />
            Bear claw liquorice sweet halvah marzipan tootsie roll. Jujubes
            halvah ice cream sugar plum I love. Cookie sugar plum danish brownie
            chupa chups tootsie roll chupa chups. Croissant soufflé I love
            croissant lollipop marshmallow. Dessert jelly lollipop sesame snaps
            I love jelly. Tart pastry chocolate cake I love. I love gingerbread
            danish topping tart sweet dessert I love pie. Halvah pastry sesame
            snaps jelly. Biscuit I love brownie pudding. Jelly beans tart
            liquorice cookie cotton candy. Cake pastry jelly beans cake I love
            jelly beans. Candy canes gummies I love. Dessert gummi bears pastry.
            Icing cotton candy I love I love pudding tart tart macaroon
            marshmallow. Marzipan I love lemon drops jelly-o caramels tootsie
            roll. Jelly-o tiramisu cotton candy bear claw cookie pudding. I love
            cupcake pastry gingerbread chocolate bar bonbon cheesecake croissant
            croissant. Marzipan brownie donut lollipop candy canes marzipan
            cupcake caramels sweet. <br />
            <br />
            Sugar plum candy brownie sweet croissant halvah. Lollipop lollipop
            gingerbread halvah caramels cake chocolate bar lemon drops. Topping
            chocolate bar jujubes powder. Lollipop sweet gummi bears oat cake.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography variant="body1" gutterBottom align="justify">
            Occupy 3 wolf moon vegan keytar kale chips live-edge, edison bulb
            taiyaki iceland etsy tumblr irony disrupt tbh godard. Roof party
            venmo craft beer irony brunch godard. <br />
            <br />
            PBR&B selfies sustainable, iceland vice humblebrag:
            <br />
            <ul>
              <li>
                Truffaut master cleanse hell of a mustache kale heroes and
                vaporware.
              </li>
              <li>Meditation unicorn cornhole pug blog four dollar toast.</li>
              <li>
                Heirloom fanny pack polaroid aesthetic chia hella umami
                post-ironic raw denim jacket
              </li>
            </ul>
            You probably haven't heard of them dreamcatcher salvia pour-over,
            trust fund tattooed XOXO single-origin coffee yuccie.
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
