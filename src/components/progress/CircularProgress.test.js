import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import Circular from "./CircularProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

afterEach(cleanup);

describe("<Circular />", () => {
  it("renders without crashing", () => {
    render(<Circular />);
  });

  it("renders 2 MUI Boxes, a MUI CircularProgress and a MUI Typography", () => {
    const wrapper = shallow(<Circular />);
    expect(wrapper.find(Box).length).toBe(2);
    expect(wrapper.find(CircularProgress).length).toBe(1);
    expect(wrapper.find(Typography).length).toBe(1);
  });

  it("has a props.value that is displayed as text with '%' appended", () => {
    const wrapper = render(<Circular value={80} />);
    wrapper.getByText(/80%/);
  });

  it("keeps the circle at 100% if more than 100 is passed as prop value", () => {
    const wrapper = shallow(<Circular value={120} />);
    const circle = wrapper.find(CircularProgress);
    expect(circle.prop("value")).toBe(100);
  });
});
