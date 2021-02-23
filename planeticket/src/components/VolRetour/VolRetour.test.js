import React from "react";
import { shallow } from "enzyme";
import VolRetour from "./VolRetour";

describe("VolRetour", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VolRetour />);
    expect(wrapper).toMatchSnapshot();
  });
});
