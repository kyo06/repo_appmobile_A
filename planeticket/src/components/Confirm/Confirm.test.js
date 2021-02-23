import React from "react";
import { shallow } from "enzyme";
import Confirm from "./Confirm";

describe("Confirm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Confirm />);
    expect(wrapper).toMatchSnapshot();
  });
});
