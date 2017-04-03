import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from "./Header";
import { Brightness2, WbSunny } from "@material-ui/icons";
import { shallow } from "enzyme";
import { Checkbox } from "@material-ui/core";

afterEach(cleanup);

describe("<Header /> ", () => {
  it("renders without crashing", () => {
    render(<Header />);
  });

  it("has 'checked' prop that displays the right button", () => {
    shallow(<Header checked={true} />);
    expect(<Brightness2 />).toBeInTheDocument;
    expect(<WbSunny />).not.toBeInTheDocument;
  });

  it("has a onChange prop that is called when Checkbox is clicked", () => {
    const header = shallow(
      <Header checked={false} onChange={() => (myState = !myState)} />
    );

    // Make sure there is a checkbox component in the first place
    let checkbox = header.find(Checkbox);
    expect(checkbox.exists()).toBe(true);

    // Create a state to test the onChange function with
    let myState = true;
    expect(myState).toBe(true);

    // simulate clicking the checkbox and check if the onChange did what it had to do
    checkbox.simulate("change");
    expect(myState).toBe(false);
  });
});
