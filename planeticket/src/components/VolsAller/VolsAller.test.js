import React from "react";
import { shallow } from "enzyme";
import VolsAller from "./VolsAller";

describe("VolsAller", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VolsAller />);
    expect(wrapper).toMatchSnapshot();
  });
});
