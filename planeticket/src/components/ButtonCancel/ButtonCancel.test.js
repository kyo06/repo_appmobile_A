import React from "react";
import { shallow } from "enzyme";
import ButtonCancel from "./ButtonCancel";

describe("ButtonCancel", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ButtonCancel />);
    expect(wrapper).toMatchSnapshot();
  });
});
