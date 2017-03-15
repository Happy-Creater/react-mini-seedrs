import { render } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { Header } from "./components/header/Header";
import { Router } from "react-router-dom";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
  // it("renders the header", () => {
  //   const wrapper = shallow(
  //       <App />
  //   );
  //   const header = wrapper.find(Header);
  //   expect(header.exists()).toBe(true);
  // });
});
