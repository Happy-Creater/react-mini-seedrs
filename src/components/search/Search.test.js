import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import Search from "./Search";

afterEach(cleanup);

describe("<Search />", () => {
  it("renders without crashing", () => {
    render(<Search />);
  });

  it("rendrs a MUI SearchIcon and an InputBase", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(SearchIcon).length).toBe(1);
    expect(wrapper.find(InputBase).length).toBe(1);
  });

  //   it("displays the title prop and subtitle prop correctly", () => {
  //     const wrapper = render(
  //       <Row title="Test Title" subtitle="Testing is awesome" />
  //     );

  //     wrapper.getByText(/Test Title/ && /Testing is awesome/);
  //   });
});
