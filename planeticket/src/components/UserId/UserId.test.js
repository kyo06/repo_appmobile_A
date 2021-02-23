import React from "react";
import { shallow } from "enzyme";
import UserId from "./UserId";

describe("UserId", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserId />);
    expect(wrapper).toMatchSnapshot();
  });
});
