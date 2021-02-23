import React from "react";
import { shallow } from "enzyme";
import TravelType from "./TravelType";

describe("TravelType", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TravelType />);
    expect(wrapper).toMatchSnapshot();
  });
});
