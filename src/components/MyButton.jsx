import React from "react";
import { Link } from "react-router-dom";

const MyButton = ({ content, to, style }) => {
  return (
    <Link to={to}>
      <button className={`btn ${style} mt-2`}>{content}</button>
    </Link>
  );
};

export default MyButton;
