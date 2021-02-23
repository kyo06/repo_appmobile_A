import React from "react";
import { shallow } from "enzyme";
import RechercheVol from "./RechercheVol";

describe("RechercheVol", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RechercheVol />);
    expect(wrapper).toMatchSnapshot();
  });
});
