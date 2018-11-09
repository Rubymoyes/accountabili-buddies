import React from "react";
import { shallow } from "enzyme";

import App from "../client/components/App";
import Questions from "../client/components/Questions";

test("<App />", () => {
  const expected =
    "Welcome to Accountabilibuddies - The 1# Survey and Forum Website!";

  const wrapper = shallow(<App />);

  const actual = wrapper.find("h1");
  expect(actual.text()).toBe(expected);
});

test("<App /> routes", () => {
  const expected = 2;

  const wrapper = shallow(<App />);

  const actual = wrapper.find("Route").length;
  expect(actual).toBe(expected);
});

test("<Questions /> form", () => {
  const expected = 1;

  const wrapper = shallow(<Questions />);

  const actual = wrapper.find("form").length;
  expect(actual).toBe(expected);
});

test("<Questions /> ", () => {
  const expected = "Question:";

  const wrapper = shallow(<Questions />);

  const actual = wrapper.find("h2");
  expect(actual.text()).toBe(expected);
});

test("<Questions /> div", () => {
  const expected = 1;

  const wrapper = shallow(<Questions />);

  const actual = wrapper.find("div").length;
  expect(actual).toBe(expected);
});
