import React from "react";
import templateCsv from "../assets/files/Template.csv";

const Button2 = () => {

  return (
    <button>
      <a href={templateCsv} download>
        Descargar Plantilla
      </a>

      
    </button>
  );
};

export default Button2;
