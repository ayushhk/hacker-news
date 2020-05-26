import React from "react";
import Link from '../Link/Link';

const Header = ({ activeTop, activeNew }) => (
  <div className="header">
    <img className="image" src="/logo.gif" alt="Hacker News" />
    <Link text="top" path="/" activeLink={activeTop} />
    <p className="separator" />
    <Link text="new" path="/newest" activeLink={activeNew} />
  </div>
);

export default Header;
