import React, { Component } from "react";
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

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    height: "55px",
  },
}));

function SocialShare() {
  const classes = useStyles();

  const url = String(window.location);
  const title = "Invest with me on Mini Seedrs";
  const shareImage =
    "https://github.com/filippomassarelli/react-mini-seedrs/blob/master/public/MiniSeedrsHome.png?raw=true";
  const size = "2.5rem";

  const ShareList = Passers({
    url,
    children: <t />,
    className: classes.socialIcons,
  })({
    className: "",
    title: `Share ${String(window.location)}`,
  })("li");

  return (
    <ShareList>
      <FacebookShareButton quote={title}>
        <FacebookIcon size={size} />
      </FacebookShareButton>

      <TwitterShareButton title={title}>
        <TwitterIcon size={size} />
      </TwitterShareButton>

      <WhatsappShareButton title={title} separator=":: ">
        <WhatsappIcon size={size} />
      </WhatsappShareButton>

      <LinkedinShareButton title={title} windowWidth={750} windowHeight={600}>
        <LinkedinIcon size={size} />
      </LinkedinShareButton>

      <PinterestShareButton
        url={String(window.location)}
        media="https://images.indianexpress.com/2019/04/cat_759getty.jpg"
        // media={`${shareImage}`}
        windowWidth={1000}
        windowHeight={730}
      >
        <PinterestIcon size={size} />
      </PinterestShareButton>
    </ShareList>
  );
}

export default SocialShare;
