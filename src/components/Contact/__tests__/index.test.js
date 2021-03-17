import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, getByLabelText } from "@testing-library/react";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<ContactForm></ContactForm>);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("h1 is visible for contact title", () => {
  it("inserts text into button and title of form", () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    expect(getByTestId("contact")).toHaveTextContent("Contact me");
    expect(getByTestId("submit")).toHaveTextContent("Submit");
  });
});
