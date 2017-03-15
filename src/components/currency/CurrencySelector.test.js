import React from "react";
import { cleanup, render } from "@testing-library/react";
import Currency from "./CurrencySelector";
import { shallow } from "enzyme";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

afterEach(cleanup);

describe("<Currency />", () => {
  it("renders without crashing", () => {
    render(<Currency />);
  });

  it("renders a MUI TextField", () => {
    const wrapper = shallow(<Currency />);
    let textfield = wrapper.find(TextField);
    expect(textfield.exists()).toBe(true);
  });

  it("gives 3 currency options: GBP, BTC, and EUR in this order", () => {
    const wrapper = shallow(<Currency />);
    expect(wrapper.find(MenuItem).at(0).prop("value")).toBe("GBP");
    expect(wrapper.find(MenuItem).at(1).prop("value")).toBe("BTC");
    expect(wrapper.find(MenuItem).at(2).prop("value")).toBe("EUR");
  });
});
