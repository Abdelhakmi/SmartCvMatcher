import React from "react";
import Navbar from "../components/Navbar";

const GlobalLayout = ({ children }) => {
  return (
    <div className="p-0">
      <div className="">
        <Navbar />
      </div>
      {/* <LogoutBtnComponent /> */}
      <div className={`col-12`}>{children}</div>
    </div>
  );
};

export default GlobalLayout;
