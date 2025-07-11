import "./css/login.css";
import scmLogin from "../assets/scm-logo1.png";
import { Link } from "react-router-dom";
import ButtonPurple from "../components/MyButton";

export default function Login() {
  return (
    <>
      <div className="d-flex col-12">
        <div className="BlocLogin col-12">
          {/* <img src={scmLogin} alt="loginImg" className="loginImg" /> */}
          <h2 className="mt-4 text-purple-light fixed-top">
            Avec{" "}
            <span className="text-light bolder">SCM-AI (Smart Cv Matcher)</span>{" : "}
            trouvez le bon <span className="text-light">talent</span> , au bon{" "}
            <span className="text-light">moment</span> , pour le bon{" "}
            <span className="text-light">poste.</span>{" "}
          </h2>
          <div className="BlocRightLogin p-3 me-5">
            <div className="DIV2 col-5 rounded ">
              <div className="FormLogin m-5  rounded p-5 shadow text-purple ">
                <h3 className="mb-5 fw-bold">AUTHENTIFICATION</h3>
                <form>
                  <input
                    type="email"
                    className="form-control mb-3 mb-4 border-dark"
                    placeholder="Email ou nom d'utilisateur"
                  />
                  <input
                    type="password"
                    className="form-control mb-4 border-dark"
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
