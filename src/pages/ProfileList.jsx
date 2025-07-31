import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Envelope,
  PersonBadge,
  PersonVcardFill,
  PersonWorkspace,
  PinMap,
  UiChecks,
} from "react-bootstrap-icons";
import "./css/profileList.css";
import GlobalLayout from "../Layouts/GlobalLayout";
import VIDEO from "../assets/video_bg_A.mp4";

function AnimatedPercentage({ value, duration = 1000 }) {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(duration / value, 10); // éviter que ça aille trop vite
    const timer = setInterval(() => {
      start += 1;
      setDisplayedValue(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="badge bg-black">{displayedValue}%</span>;
}

export default function ProfileList() {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
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
      textAlign: "center",
      color: "white",
      top: "50%",
      transform: "translateY(-50%)",
      padding: "0 20px",
    },
  };
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // axios.get("/api/profiles").then((res) => setProfiles(res.data));
  }, []);

  return (
    <GlobalLayout>
      <div style={styles.container}>
        <video style={styles.video} autoPlay muted loop>
          <source src={VIDEO} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <div style={styles.content}>
          <div className="pt-5">
            <dir className="container pt-5">
              <div className="table-responsive shadow rounded border bg-white">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>
                        <PersonBadge className="me-2" />
                        Nom Complet
                      </th>
                      <th>
                        {" "}
                        <Envelope className="me-2" /> Email
                      </th>
                      <th>
                        <PersonWorkspace className="me-2" />
                        Poste désiré
                      </th>
                      <th>
                        <PinMap className="me-2" />
                        Ville
                      </th>
                      <th className="text-center">
                        {" "}
                        <UiChecks className="me-2" />
                        Matching %
                      </th>
                      <th className="text-center">
                        <PersonVcardFill className="me-2" />
                        Détails
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Exemple de profils statiques */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
                      <tr key={`static-${i}`}>
                        <td>John Doe</td>
                        <td>test@gmail.com</td>
                        <td>Développeur Web</td>
                        <td>Casablanca</td>
                        <td className="text-center">
                          <AnimatedPercentage value={90 - i} />
                        </td>
                        <td className="text-center">
                          <Link to="/profiles/detail">
                            <button
                              className="btn btn-sm btn-outline-dark"
                              onClick={() => navigate(`/profiles/`)}
                            >
                              <i className="bi bi-eye"></i> Détails
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}

                    {/* Profils dynamiques */}
                    {/* {profiles.map((p, i) => (
                  <tr key={i}>
                    <td>
                      {p.personal_info?.First_name} {p.personal_info?.Last_name}
                    </td>
                    <td>{p.personal_info?.email}</td>
                    <td>{p.job_preferences?.desired_positions?.[0]}</td>
                    <td>{p.personal_info?.location}</td>
                    <td className="text-center">
                      {p.matching_percentage != null 
                      ? (<AnimatedPercentage value={p.matching_percentage} />) 
                      : ( <span className="badge bg-secondary">N/A</span>
                      )}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => navigate(`/profiles/${i}`)}
                      >
                        <i className="bi bi-eye"></i> Détails
                      </button>
                    </td>
                  </tr>
                ))} */}
                  </tbody>
                </table>
              </div>
            </dir>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
