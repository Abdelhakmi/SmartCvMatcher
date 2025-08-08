import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import {
  Check2Square,
  Download,
  FilePdfFill,
  Repeat,
} from "react-bootstrap-icons";
import axios from "axios";
import "./css/upload.css";
import MyButton from "../components/MyButton";
import GlobalLayout from "../Layouts/GlobalLayout";
import VIDEO from "../assets/video_bg_A.mp4";

export default function Upload() {
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
    },
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      setSelectedFile(file);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("criteria", searchCriteria); // joindre le texte

      axios.post("/api/parse", formData).then((res) => {
        setProfileData(res.data);
      });
    },
    [searchCriteria]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <GlobalLayout>
      <div style={styles.container}>
        <video style={styles.video} autoPlay muted loop>
          <source src={VIDEO} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        <div style={styles.content} className="p-3">
          {/* Bouton pour ouvrir le modal */}

          {/* Contenu principal qui prend toute la largeur */}
          <div className="col-12">
            <div className="d-flex align-items-center col-12 bg-upload">
              <div
                className="container d-flex flex-column pt-5"
                style={{ maxWidth: "700px", flexGrow: 1, margin: "0 auto" }}
              >
                <button
                  className="btn btn-light mb-3 p-3"
                  onClick={() => setShowModal(true)}
                >
                  <h4>
                    <Download /> Téléverser des CV <FilePdfFill />
                  </h4>
                </button>

                <h3>ou</h3>

                <div className="border border-2 p-4 rounded mt-3">
                  <h1 className="title-upload mb-4 text-center text-white">
                    <Download /> Téléversez votre fiche de poste
                  </h1>

                  <div
                    {...getRootProps()}
                    className={`border border-2 rounded-4 p-5 text-center w-100 shadow border-dark ${
                      isDragActive ? "bg-light" : ""
                    }`}
                    style={{
                      background: "#f9f9ff",
                      borderColor: "#5653c1",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    <input {...getInputProps()} />
                    {selectedFile ? (
                      <h5 className="text-purple fw-semibold">
                        <Check2Square /> Fichier sélectionné :{" "}
                        {selectedFile.name}
                      </h5>
                    ) : (
                      <p style={{ color: "#1b1f3b", fontWeight: "500" }}>
                        {isDragActive
                          ? "Relâchez le fichier ici..."
                          : "Glissez un fichier ici ou cliquez pour en sélectionner un"}
                      </p>
                    )}
                  </div>

                  {profileData && (
                    <div className="mt-4 w-100">
                      <div className="alert alert-success text-center">
                        Profil analysé avec succès ✅
                      </div>
                    </div>
                  )}

                  {/* Zone d'écriture*/}
                  <div className="w-100 py-3 ">
                    <textarea
                      className="form-control rounded px-5 py-2 shadow-sm border-dark border-2"
                      rows="4"
                      placeholder="Ou bien décrivez ici les critères de selection que vous recherchez..."
                      value={searchCriteria}
                      onChange={(e) => setSearchCriteria(e.target.value)}
                    />
                  </div>

                  {/* Boutons Recommencer et Confirmer */}
                  {(selectedFile || searchCriteria.trim() !== "") && (
                    <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                      <button
                        className="btn btn-light shadow d-flex align-items-center"
                        onClick={() => {
                          setSelectedFile(null);
                          setSearchCriteria("");
                          setProfileData(null);
                        }}
                      >
                        <Repeat className="me-2" /> Vider
                      </button>
                      <MyButton
                        content="Commencer le matching"
                        to="/profiles"
                        style="btn-light shadow"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal pour téléversement CV */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onClick={() => setShowModal(false)}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content border-light rounded">
                <div className="modal-header bg-dark text-light">
                  <h5 className="modal-title">
                    <Download /> Téléversez vos CV
                  </h5>
                  <button
                    type="button"
                    className="btn-close bg-light"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body p-5">
                  <div
                    {...getRootProps()}
                    className={`border border-2 rounded-4 p-5 text-center w-100 shadow ${
                      isDragActive ? "bg-light" : ""
                    }`}
                    style={{
                      borderColor: "#5653c1",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    <input {...getInputProps()} />
                    {selectedFile ? (
                      <h5 className="text-purple fw-semibold">
                        <Check2Square /> Fichier sélectionné :{" "}
                        {selectedFile.name}
                      </h5>
                    ) : (
                      <p style={{ color: "#1b1f3b", fontWeight: "500" }}>
                        {isDragActive
                          ? "Relâchez le fichier ici..."
                          : "Glissez un fichier ici ou cliquez pour en sélectionner un"}
                      </p>
                    )}
                  </div>

                  {profileData && (
                    <div className="mt-4 w-100">
                      <div className="alert alert-success text-center">
                        Profil analysé avec succès ✅
                      </div>
                    </div>
                  )}

                  {/* Boutons Recommencer et Confirmer */}
                  {(selectedFile || searchCriteria.trim() !== "") && (
                    <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                      <button
                        className="btn btn-light shadow d-flex align-items-center"
                        onClick={() => {
                          setSelectedFile(null);
                          setSearchCriteria("");
                          setProfileData(null);
                        }}
                      >
                        <Repeat className="me-2" /> Vider
                      </button>
                      <MyButton
                        content="Commencer le matching"
                        to="/profiles"
                        style="btn-light shadow"
                        onClick={() => setShowModal(false)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GlobalLayout>
  );
}
