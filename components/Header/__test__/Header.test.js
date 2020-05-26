import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header  View", () => {
  const props = {
    activeTop: true
  };
  beforeEach(() => {
    component = shallow(<Header {...props} />);
  });
it('Header should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
