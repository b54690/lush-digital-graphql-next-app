import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <Navbar title="Lush Digital" />
      {children}
    </>
  );
};
export default Layout;
