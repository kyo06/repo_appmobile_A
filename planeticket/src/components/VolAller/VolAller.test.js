import React from "react";
import { shallow } from "enzyme";
import VolAller from "./VolAller";

describe("VolAller", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VolAller />);
    expect(wrapper).toMatchSnapshot();
  });
});
