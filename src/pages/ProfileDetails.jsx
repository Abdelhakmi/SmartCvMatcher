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
import { useRef, useEffect, useState } from "react";

export default function ProfileDetails() {
  const matchPercentage = 90;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${
    circumference * (matchPercentage / 100)
  }, ${circumference}`;
  const iframeContainerRef = useRef(null);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const handleDoubleClick = () => {
    if (!document.fullscreenElement) {
      if (iframeContainerRef.current?.requestFullscreen) {
        iframeContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      // overflowX: "hidden",
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
      height: "calc(100vh - 100px)", // ajustable selon le header
      gap: "25px",
      color: "#fff",
      marginTop: "50px",
    },
    infoBox: {
      backgroundColor: "rgba(128, 0, 255, 0.54)",
      borderRadius: "10px",
      padding: "15px",
      // maxHeight: "50%",
      border: "1px solid white",
      height: "auto",
    },
    leftColumn: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.46)",
      borderRadius: "10px",
      padding: "15px",
      overflowY: "auto",
      border: "1px solid white",
      height: "100%", // <- ajoute ceci
      scrollbarXidth: "thin",
      scrollbarColor: "#aaa transparent",
    },
    middleColumn: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.46)",
      borderRadius: "10px",
      padding: "15px",
      overflowY: "auto",
      border: "1px solid white",
      height: "100%", // <- ajoute ceci
      scrollbarXidth: "thin",
      scrollbarColor: "#aaa transparent",
    },

    colGroup: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "100%", // <- ajoute ceci
    },

    rightColumn: {
      flex: 1,
      backgroundColor: "rgba(128, 0, 255, 0.54)",
      borderRadius: "10px",
      padding: "15px",
      overflowY: "auto",
      border: "1px solid white",
      height: "100%", // <- ajoute ceci
      scrollbarXidth: "thin",
      scrollbarColor: "#aaa transparent",
    },

    scrollList: {
      overflowY: "auto",
      paddingRight: "10px",
      marginBottom: "0",
    },
  };

  useEffect(() => {
  let current = 0;
  const speed = 15; // ms between steps
  const step = 1;   // increase by 1 each time

  const interval = setInterval(() => {
    current += step;
    if (current <= matchPercentage) {
      setAnimatedPercentage(current);
    } else {
      clearInterval(interval);
    }
  }, speed);

  return () => clearInterval(interval);
}, []);

  return (
    <GlobalLayout>
      <div style={styles.container} className="p-5">
        <video style={styles.video} autoPlay muted loop>
          <source src={VIDEO} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        {/* <div className="d-flex flex-row align-items-center mb-3">
          <Link to="/profiles" className="col-2">
            <button className="btn btn-light me-3 shadow">
              <ArrowLeft className="me-2" />
              Page précédente
            </button>
          </Link>
          <div className="col-8">
            <h2 className="titleProfileList text-center flex-grow-1 text-white mt-2">
              <Fingerprint /> Informations Détaillées
            </h2>
          </div>
        </div> */}

        <div style={styles.content} className="row p-2">
          {/* Left Column */}
          <div style={styles.leftColumn}>
            <div style={styles.colGroup}>
              {/* Matching */}
              <div style={{ ...styles.infoBox }}>
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
                    background: "rgba(0, 0, 0, 0.56)",
                  }}
                  className="rounded py-2"
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
                      strokeDasharray={`${circumference * (animatedPercentage / 100)}, ${circumference}`}
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
                      {animatedPercentage}%
                    </text>
                  </svg>
                </div>
              </div>

              {/* Infos personnelles */}
              <div style={{ ...styles.infoBox, height: "100%" }}>
                <h5 className="border-bottom pb-2">
                  <PersonVcard /> Infos personnelles
                </h5>
                <ul className="styled-list" style={styles.scrollList}>
                  <li>Nom complet : AMANDA COOPER</li>
                  <li>Email : john.doe@email.com</li>
                  <li>Ville : Casablanca</li>
                  <li>Années d'expérience : 7ans</li>
                  <li>Nationalité : Marocaine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div style={styles.middleColumn}>
            <div style={styles.colGroup}>
              {/* Compétences Obligatoires */}
              <div style={{ ...styles.infoBox }}>
                <h5 className="border-bottom pb-2">
                  <Laptop /> Compétences Obligatoires
                </h5>
                <ul className="styled-list1" style={styles.scrollList}>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                </ul>
              </div>
              {/* Atouts Supplémentaires */}
              <div style={{ ...styles.infoBox }}>
                <h5 className="border-bottom pb-2">
                  <Palette /> Atouts Supplémentaires
                </h5>
                <ul className="styled-list1" style={styles.scrollList}>
                  <li>Docker</li>
                  <li>GraphQL</li>
                  <li>Redis</li>
                  <li>Next.js</li>
                  <li>CI/CD</li>
                </ul>
              </div>

              {/* Langues */}
              <div style={{ ...styles.infoBox }}>
                <h5 className="border-bottom pb-2">
                  <ChatLeftText /> Langues
                </h5>
                <ul className="styled-list" style={styles.scrollList}>
                  <li>Arabe : Avancé (oral/écrit)</li>
                  <li>Français : Avancé (oral/écrit)</li>
                  <li>Anglais : Moyen (oral/écrit)</li>
                  <li>Espagnol : Débutant</li>
                  <li>Italien : Débutant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            style={styles.rightColumn}
            ref={iframeContainerRef}
            onClick={handleDoubleClick}
          >
            <div style={styles.colGroup}>
              <h4>
                <FileEarmarkPdf /> CV du candidat
              </h4>
              <p>
                <small
                  className="text-light me-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  (Cliquez pour voir en plein écran ou pour réduire l'affichage)
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
      </div>
    </GlobalLayout>
  );
}
