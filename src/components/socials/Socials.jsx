import React from "react";
import { Passers } from "prop-passer";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
} from "react-share";
import { makeStyles } from "@material-ui/styles";

//STYLES
const useStyles = makeStyles((theme) => ({
  socialIcons: {
    height: "50px",
    marginRight: "5px",
  },
}));

//COMPONENT
function SocialShare() {
  //HOOKS
  const classes = useStyles();

  // DATA
  const url = String(window.location);
  const title = "Invest with me on Mini Seedrs";
  const shareImage =
    "https://raw.githubusercontent.com/filippomassarelli/react-mini-seedrs/master/public/MiniSeedrs-Home.png";

  const size = "2rem";
  const ShareList = Passers({
    url,
    children: <t />,
    className: classes.socialIcons,
  })({
    className: "",
    title: `Share ${String(window.location)}`,
  })("li");

  //OUTPUT
  return (
    <ShareList>
      <FacebookShareButton quote={title}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton title={title}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>

      <WhatsappShareButton title={title} separator=":: ">
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url="https://www.seedrs.com/" //Linkedin sharing API has changed and now requires specific meta tags in website, using seedrs for now
        title={title}
        windowWidth={750}
        windowHeight={600}
      >
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>

      <PinterestShareButton
        url={String(window.location)}
        media={`${shareImage}`}
        windowWidth={1000}
        windowHeight={730}
      >
        <PinterestIcon size={size} round />
      </PinterestShareButton>
    </ShareList>
  );
}

export default SocialShare;
