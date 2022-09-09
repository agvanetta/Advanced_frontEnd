/*      View      */
import { downloadService } from "./ServiceLayer";
import React, { useRef } from "react";
import useFileDownloader, { blobType } from "./Logica";

const Download = ({ children, file }) => {
  const downloadRef = useRef();

  const { downloadFileHandler } = useFileDownloader(downloadRef);

  const clickHandler = async () => {
    const dataFile = await downloadService(file);
    downloadFileHandler(dataFile, blobType["text/csv"], "Plantilla de presentacion.csv");
  };
  return (
    <>
      <button onClick={(event) => clickHandler()}>
        <a ref={downloadRef} />

        {children}
      </button>
    </>
  );
};

export default Download;
