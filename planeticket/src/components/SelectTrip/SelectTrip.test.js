import React from "react";
import { shallow } from "enzyme";
import SelectTrip from "./SelectTrip";

describe("SelectTrip", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SelectTrip />);
    expect(wrapper).toMatchSnapshot();
  });
});
