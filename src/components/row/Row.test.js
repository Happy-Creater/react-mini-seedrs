import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
// import { campaignsAPI } from "../../axios";
import CampaignCard from "../card/Card";
import { Typography } from "@material-ui/core";

import Row from "./Row";

afterEach(cleanup);

describe("<Row />", () => {
  it("renders without crashing", () => {
    render(<Row />);
  });

  it("rendrs 2 Typography and 1 Card after loading data from API call", () => {
    setTimeout(() => {
      const wrapper = shallow(<Row />);
      expect(wrapper.find(Typography).length).toBe(2);
      expect(wrapper.find(CampaignCard).length).toBe(1);
    }, 1000);
  });

  it("displays the title prop and subtitle prop correctly", () => {
    const wrapper = render(
      <Row title="Test Title" subtitle="Testing is awesome" />
    );

    wrapper.getByText(/Test Title/ && /Testing is awesome/);
  });
});
