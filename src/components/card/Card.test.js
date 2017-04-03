import React from "react";
import { cleanup, render } from "@testing-library/react";
import Card from "./Card";

import { BrowserRouter, Link } from "react-router-dom";

afterEach(cleanup);

describe("<Card />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Card targetAmount={1000} />{" "}
      </BrowserRouter>
    );
  });

  it("has props that work", () => {
    const card = render(
      <BrowserRouter>
        <Card
          campaignId={1}
          name="Revolut"
          percentageRaised={390}
          targetAmount={5000000}
          sector="Fintech"
          image="https://assets.revolut.com/media/index/US/home.png"
        />
      </BrowserRouter>
    );
    card.getByText(/Fintech/ && /Revolut/ && /£5,000,000/ && /390%/);
    card.getByAltText("Revolut");
    expect(<Link to={{ pathname: "/:1" }} />).toBeInTheDocument;
  });

  it("is a dumb component for all props but the image", () => {
    const card = render(
      <BrowserRouter>
        <Card
          campaignId={-1}
          name={0}
          percentageRaised={-390}
          targetAmount={-5000000}
          sector={0}
          image="yooo"
        />{" "}
      </BrowserRouter>
    );
    card.getByText(/0/ && /0/ && /£-5,000,000/ && /-390%/);
    expect(<img />).not.toBeInTheDocument;
    expect(<Link to={{ pathname: "/:-1" }} />).toBeInTheDocument;
  });
});
