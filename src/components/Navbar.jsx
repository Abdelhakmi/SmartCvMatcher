import React, { useEffect } from "react";
import "./css/navbar.css";
import logoSCM from "../assets/scm-logo.png";
import { useContext } from "react";
import {
  ArrowLeft,
  BoxArrowRight,
  Fingerprint,
  ListOl,
  PersonBoundingBox,
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
          className="navbar-brand text-white fw-bold border-end pe-3"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        >
          SCM-AI
        </span>
        {location.pathname == "/upload" ? (
          <div className="col-1"></div>
        ) : (
          <Link
            to={
              location.pathname == "/profiles/detail" ? "/profiles" : "/upload"
            }
            className=""
          >
            <button className="btn btn-outline-light me-3 shadow">
              <ArrowLeft className="me-2" />
              Page précédente
            </button>
          </Link>
        )}

        <div className="col-8">
          <h2 className="titleProfileList text-center flex-grow-1 text-white mt-2">
            {location.pathname == "/profiles/detail" ? (
              <>
                <Fingerprint />
                Informations Détaillées
              </>
            ) : location.pathname == "/profiles" ? (
              <>
                <PersonBoundingBox /> Les profils qui conviennent le mieux à vos
                besoins
              </>
            ) : location.pathname == "/upload" ? (
              <>
                <ListOl /> Spécifiez votre fiche de poste
              </>
            ) : (
              ""
            )}
          </h2>
        </div>

        <div className="d-flex ms-auto ">
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
