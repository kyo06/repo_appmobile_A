import React from "react";
import { shallow } from "enzyme";
import VolsRetour from "./VolsRetour";

describe("VolsRetour", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VolsRetour />);
    expect(wrapper).toMatchSnapshot();
  });
});
