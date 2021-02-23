import React from "react";
import { shallow } from "enzyme";
import Reservation from "./Reservation";

describe("Reservation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper).toMatchSnapshot();
  });
});
