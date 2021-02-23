import React from "react";
import { shallow } from "enzyme";
import NextTrip from "./NextTrip";

describe("NextTrip", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NextTrip />);
    expect(wrapper).toMatchSnapshot();
  });
});
