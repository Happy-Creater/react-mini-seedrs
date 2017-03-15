import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import MyTab from "./Tab";

import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import tabsText from "../../tabsText";

afterEach(cleanup);

describe("<MyTab />", () => {
  it("renders without crashing", () => {
    render(<MyTab tabsText={tabsText} />);
  });

  it("renders 1 MUI AppBat with 1 MUI Tabs and 3 MUI Tab elements", () => {
    const wrapper = shallow(<MyTab tabsText={tabsText} />);
    expect(wrapper.find(AppBar).length).toBe(1);
    expect(wrapper.find(Tabs).length).toBe(1);
    expect(wrapper.find(Tab).length).toBe(3);
  });

  it("renders 1 MUI SwipeableViews with 3 MUI Typography elements", () => {
    const wrapper = shallow(<MyTab tabsText={tabsText} />);
    expect(wrapper.find(SwipeableViews).length).toBe(1);
    expect(wrapper.find(Typography).length).toBe(3);
  });

  it("has a Business, Team and Document tabs in this order", () => {
    const wrapper = shallow(<MyTab tabsText={tabsText} />);
    expect(wrapper.find(Tab).at(0).prop("label")).toBe("Business");
    expect(wrapper.find(Tab).at(1).prop("label")).toBe("Team");
    expect(wrapper.find(Tab).at(2).prop("label")).toBe("Documents");
  });

  it("displays the text passed in the props", () => {
    const wrapper = shallow(
      <MyTab tabsText={{ tab1: "Text1", tab2: "Text2", tab3: "Text3" }} />
    );
    expect(wrapper.find("Text1")).toBeInTheDocument;
    expect(wrapper.find("Text2")).toBeInTheDocument;
    expect(wrapper.find("Text3")).toBeInTheDocument;
  });
});
