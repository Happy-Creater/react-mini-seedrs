import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core";

import InvestForm from "./InvestForm";

let myTheme;

beforeEach(() => {
  myTheme = createMuiTheme({
    palette: {
      text: {
        primary: "#7FBB30",
      },
    },
  });
});
afterEach(cleanup);

describe("<InvestForm />", () => {
  it("renders without crashing", () => {
    render(
      <MuiThemeProvider theme={myTheme}>
        <InvestForm />
      </MuiThemeProvider>
    );
  });
});
