import "./css/authenticate.css";
import scmAuthenticate from "../assets/scm-logo1.png";
import { Link } from "react-router-dom";
import ButtonPurple from "../components/MyButton";

export default function Authenticate() {
  return (
    <>
      <div className="d-flex col-12">
        <div className="BlocAuth col-12 ">
          {/* <img src={scmAuthenticate} alt="AuthenticateImg" className="AuthenticateImg" /> */}
          <h2 className="mt-4 text-purple fixed-top">
            Avec <span className="text-dark">SCM-AI (Smart Cv Matcher)</span> : trouvez le bon <span className="text-dark">talent</span> , au bon{" "}
            <span className="text-dark">moment</span> , pour le bon{" "}
            <span className="text-dark">poste.</span>{" "}
          </h2>
          <div className="BlocFormAuth d-flex justify-content-end align-items-center me-5">
            <div className="FormAuth col-4 p-5 border shadow me-5 bg-light">
              <div className="col-12  p-2">
                <h3 className="mb-4">AUTHENTIFICATION </h3>
                <form>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Mot de passe"
                  />
                  <ButtonPurple
                    content="Se connecter"
                    to="/upload"
                    style="btn-purple"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
