import React from "react";
import { shallow } from "enzyme";
import Recap from "./Recap";

describe("Recap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Recap />);
    expect(wrapper).toMatchSnapshot();
  });
});
