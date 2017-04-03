import React from "react";
import { cleanup, render } from "@testing-library/react";
import Socials from "./Socials";
import { shallow } from "enzyme";
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

afterEach(cleanup);

describe("<Socials />", () => {
  it("renders without crashing", () => {
    render(<Socials />);
  });

  it("renders all social buttons ", () => {
    const wrapper = shallow(<Socials />);
    // Facebook
    let Facebook = wrapper.find(FacebookShareButton);
    expect(Facebook.exists()).toBe(true);

    // Twitter
    let Twitter = wrapper.find(TwitterShareButton);
    expect(Twitter.exists()).toBe(true);

    // Linkedin
    let Linkedin = wrapper.find(LinkedinShareButton);
    expect(Linkedin.exists()).toBe(true);

    // Whatsapp
    let Whatsapp = wrapper.find(WhatsappShareButton);
    expect(Whatsapp.exists()).toBe(true);

    // Pinterest
    let Pinterest = wrapper.find(PinterestShareButton);
    expect(Pinterest.exists()).toBe(true);
  });

  it("renders the right icon for each button", () => {
    const wrapper = shallow(<Socials />);
    // Facebook
    let fbIcon = wrapper.find(FacebookShareButton).find(FacebookIcon);
    expect(fbIcon.exists()).toBe(true);

    // Twitter
    let twIcon = wrapper.find(TwitterShareButton).find(TwitterIcon);
    expect(twIcon.exists()).toBe(true);

    // Linkedin
    let lkIcon = wrapper.find(LinkedinShareButton).find(LinkedinIcon);
    expect(lkIcon.exists()).toBe(true);

    // Whatsapp
    let wIcon = wrapper.find(WhatsappShareButton).find(WhatsappIcon);
    expect(wIcon.exists()).toBe(true);

    // Pinterest
    let pIcon = wrapper.find(PinterestShareButton).find(PinterestIcon);
    expect(pIcon.exists()).toBe(true);
  });
});
