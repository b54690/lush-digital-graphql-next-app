import React from "react";
import NavbarStyles from "./NavbarStyles";

const Navbar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <NavbarStyles>
      <h2 className="heading-primary">{title}</h2>
    </NavbarStyles>
  );
};

export default Navbar;
