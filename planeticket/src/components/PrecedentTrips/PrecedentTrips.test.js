import React from "react";
import { shallow } from "enzyme";
import PrecedentTrips from "./PrecedentTrips";

describe("PrecedentTrips", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PrecedentTrips />);
    expect(wrapper).toMatchSnapshot();
  });
});
