import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import Linear from "./LinearProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

afterEach(cleanup);

describe("<Linear />", () => {
  it("renders without crashing", () => {
    render(<Linear />);
  });

  it("renders 3 MUI Boxes, a MUI LinearProgress and a MUI Typography", () => {
    const wrapper = shallow(<Linear />);
    expect(wrapper.find(Box).length).toBe(3);
    expect(wrapper.find(LinearProgress).length).toBe(1);
    expect(wrapper.find(Typography).length).toBe(1);
  });

  it("has a props.value that is displayed as text with '%' appended", () => {
    const wrapper = render(<Linear value={75} />);
    wrapper.getByText(/75%/);
  });

  it("keeps the bar at 100% if more than 100 is passed as prop value", () => {
    const wrapper = shallow(<Linear value={120} />);
    const bar = wrapper.find(LinearProgress);
    expect(bar.prop("value")).toBe(100);
  });

  it("is dumb", () => {
    const wrapper = render(<Linear value={-200075} />);
    wrapper.getByText(/-200075/);

    const wrapper2 = shallow(<Linear value={-200075} />);
    const bar = wrapper2.find(LinearProgress);
    expect(bar.prop("value")).toBe(-200075);
  });
});
