import React from "react";
import { shallow } from "enzyme";
import Link from "../Link";

describe("Link  View", () => {
  const props = {
    path: "/",
    text:"top",
    activeLink: true
  };
  beforeEach(() => {
    component = shallow(<Header {...props} />);
  });
it('Link component should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
