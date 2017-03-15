// import { jest } from "@jest/globals";

import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { mount, shallow } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
// import { createMount } from "@material-ui/core/test-utils";
import { screen } from "@testing-library/dom";
import { createMuiTheme } from "@material-ui/core";
import { Router } from "react-router-dom";

describe("<Banner /> ", () => {
  it('should render "Hey explorer" greeting', () => {
    const shallow = createShallow();
    const wrapper = shallow(
      <MuiThemeProvider
        theme={createMuiTheme({
          spacing: 4,
          palette: {
            primary: {
              main: "#007bff",
            },
          },
        })}
      >
        <Router>
          <Banner />
        </Router>
      </MuiThemeProvider>
    );
    render(wrapper);
    // wrapper.root.getByText(/Hey explorer/);
    // expect(screen.getByText("explorer")).toBeVisible();
  });

  // it("renders without crashing", () => {
  //   // const mount = createMount();
  //   const wrapper = mount(
  //     <MuiThemeProvider
  //       theme={{
  //         palette: {
  //           primary: {
  //             main: "#7FBB30",
  //           },
  //         },
  //       }}
  //     >
  //       <Banner />
  //     </MuiThemeProvider>
  //   );
  //   render(wrapper);
  // });
});
