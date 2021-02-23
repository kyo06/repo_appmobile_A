import React from "react";
import { shallow } from "enzyme";
import TypeVol from "./TypeVol";

describe("TypeVol", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TypeVol />);
    expect(wrapper).toMatchSnapshot();
  });
});
