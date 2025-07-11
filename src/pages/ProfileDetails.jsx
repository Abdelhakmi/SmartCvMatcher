import "./css/profileDetails.css";
import GlobalLayout from "../Layouts/GlobalLayout";
import VIDEO from "../assets/video_bg_A.mp4";
import {
  ArrowLeft,
  ArrowsFullscreen,
  Brush,
  ChatLeftText,
  FileEarmarkPdf,
  Fingerprint,
  Laptop,
  Palette,
  PersonBoundingBox,
  PersonVcard,
  UiChecks,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function ProfileDetails() {
  const matchPercentage = 90;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${
    circumference * (matchPercentage / 100)
  }, ${circumference}`;
  const iframeContainerRef = useRef(null);

  const handleDoubleClick = () => {
    if (!document.fullscreenElement) {
      // Activer plein écran
      if (iframeContainerRef.current?.requestFullscreen) {
        iframeContainerRef.current.requestFullscreen();
      }
    } else {
      // Quitter plein écran
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: "100vh", // pas height fixe
      overflowY: "auto", // active le scroll vertical
      overflowX: "hidden",
    },

    video: {
      position: "absolute",
      top: 0,
      left: 0,
      minWidth: "100%",
      minHeight: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    content: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      height: "100%",
      padding: "40px",
      gap: "20px",
      color: "#fff",
    },
    infoBox: {
      backgroundColor: "rgba(0, 0, 0, 0.86)",
      borderRadius: "10px",
      padding: "15px",
      minHeight: "120px",
      border: "1px solid white",
    },

    leftColumn: {
      flex: 2,
      display: "flex",
      gap: "20px",
    },
    leftColGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    fullHeightBox: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "20px",
    },
    rightColumn: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.86)",
      borderRadius: "10px",
      padding: "15px",
      overflowY: "auto",
      border: "1px solid white",
      minHeight: "100vh",
    },
  };

  return (
    <GlobalLayout>
      <div style={styles.container} className="p-5">
        <video style={styles.video} autoPlay muted loop>
          <source src={VIDEO} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        <div style={styles.content} className="row">
          <div className="d-flex flex-row align-items-center">
            <Link to="/profiles" className="col-2">
              <button className="btn btn-light me-3">
                <ArrowLeft className="me-2" />
                Page précédente
              </button>
            </Link>
            <div className="col-8">
              <h2 className="titleProfileList text-center flex-grow-1 text-white mt-2">
                <Fingerprint /> Informations Détaillées
              </h2>
            </div>
            {/* <div className="col-2"></div> */}
          </div>

          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Colonne 1 */}
            <div style={styles.leftColGroup}>
              {/* Matching */}
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5
                  className="border-bottom pb-2"
                  style={{ textAlign: "center", marginBottom: "10px" }}
                >
                  <UiChecks className="me-2" />
                  Matching
                </h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#ffffff"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#7f00ff"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={dashArray}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                    <text
                      x="60"
                      y="66"
                      textAnchor="middle"
                      fontSize="24"
                      fill="#ffffff"
                      fontWeight="bold"
                    >
                      {matchPercentage}%
                    </text>
                  </svg>
                </div>
              </div>

              {/* Infos personnelles */}
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5 className="border-bottom pb-2">
                  <PersonVcard /> Infos personnelles
                </h5>
                <ul>
                  <li>Nom complet : John Doe</li>
                  <li>Email : john.doe@email.com</li>
                  <li>Ville : Casablanca</li>
                  <li>Années d'expérience : 7ans</li>
                </ul>
              </div>

              {/* Langues */}
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5 className="border-bottom pb-2">
                  <ChatLeftText /> Langues
                </h5>
                <ul>
                  <li>Arabe : Avancé (oral/écrit)</li>
                  <li>Français : Avancé (oral/écrit)</li>
                  <li>Anglais : Moyen (oral/écrit)</li>
                </ul>
              </div>
            </div>

            {/* Colonne 2 (grande boîte pour Compétences Obligatoires) */}
            <div style={styles.leftColGroup}>
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5 className="border-bottom pb-2">
                  <Laptop /> Compétences Obligatoires
                </h5>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5 className="border-bottom pb-2">
                  <Palette /> Atouts Supplémentaires
                </h5>
                <ul>
                  <li>Docker</li>
                  <li>GraphQL</li>
                  <li>Redis</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            style={styles.rightColumn}
            ref={iframeContainerRef}
            onClick={handleDoubleClick}
            // onDoubleClick={handleDoubleClick}
          >
            <h4>
              <FileEarmarkPdf/> CV du candidat </h4>
            <p>
              <small className="text-light me-2" style={{ fontSize: "0.8rem" }}>
                (Clic pour afficher en plein écran ou pour réduire l'affichage)
              </small>
              <ArrowsFullscreen />
            </p>
            <iframe
              src="https://pawantech12.github.io/portfolio-website/Entry%20Level%20Web%20Developer%20Resume.pdf"
              width="100%"
              height="600px"
              style={{ border: "none", borderRadius: "8px" }}
              title="CV du candidat"
            ></iframe>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
