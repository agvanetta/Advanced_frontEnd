import React from "react";
import templateCsv from "../assets/files/Template.csv";
import DownloadFileService from "./DowloadFileService";

const Button3 = () => {

  const url = "index.html"

  return (
    <div>
      <button onClick={() => DownloadFileService(url, "index.html")}>
        Descargar 3.v aasdadasd
      </button>
    </div>
  );
};

export default Button3;
