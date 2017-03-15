import React from "react";
import { cleanup, render } from "@testing-library/react";
import { shallow } from "enzyme";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core";
import Banner from "./Banner";

let myTheme;

beforeEach(() => {
  myTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#7FBB30",
      },
    },
  });
});

afterEach(cleanup);

describe("<Banner />", () => {
  it("renders without crashing", () => {
    shallow(
      <MuiThemeProvider theme={myTheme}>
        <Banner />
      </MuiThemeProvider>
    );
  });

  //NOTE THAT WE ARE MAKING THE REAL API CALL IN THE TESTS... WE COULD LOOK INTO MOCKING UseEffect TO SOLVE THIS
  it("once loaded (async) has 6 MUI Grid items, 3 MUI Typography, 1 router Link and 1 MUI Button", () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={myTheme}>
        <Banner />
      </MuiThemeProvider>
    );

    setTimeout(() => {
      expect(wrapper.find(Grid).length).toBe(6);
      expect(wrapper.find(Typography).length).toBe(3);
      expect(wrapper.find(Link).length).toBe(1);
      expect(wrapper.find(Button).length).toBe(1);
    }, 1000);
  });

  it("is responsive", () => {
    const wrapper = shallow(
      <MuiThemeProvider theme={myTheme}>
        <Banner />
      </MuiThemeProvider>
    );
    setTimeout(() => {
      expect(wrapper.find(Grid).at(2).prop("xs").exists()).toBe(true);
      expect(wrapper.find(Grid).at(3).prop("xs").exists()).toBe(true);
      expect(wrapper.find(Grid).at(4).prop("xs").exists()).toBe(true);
      expect(wrapper.find(Grid).at(5).prop("xs").exists()).toBe(true);
    }, 1000);
  });
});
