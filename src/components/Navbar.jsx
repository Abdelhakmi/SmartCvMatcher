import React from "react";
import "./css/navbar.css";
import logoSCM from "../assets/scm-logo.png";
import { useContext } from "react";
import {
  ArrowBarLeft,
  ArrowBarRight,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-nav border-bottom p-3">
      <div className="container-fluid">
        <span
          className="navbar-brand text-white fw-bold"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        >
          SCM-AI
        </span>

        <div className="d-flex ms-auto">
          <Link to="/" className="Link">
            <button className="btn btn-outline-light d-flex align-items-center">
              <BoxArrowRight className="me-2" />
              Se déconnecter
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
