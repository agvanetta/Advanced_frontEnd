/*     Logica      */
export const blobType = {
  "text/csv": "text/csv",
};

const useFileDownloader = (anchorRef) => {
  const downloadFileHandler = (responseDataFile, fileType, saveAs) => {
    anchorRef.current.href = window.URL.createObjectURL(
      new Blob([responseDataFile]),
      { type: fileType }
    );

    anchorRef.current.setAttribute("download", saveAs);
    //stop bubbling event to parent nodes
    anchorRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    anchorRef.current?.click();
  };

  return {
    downloadFileHandler,
  };
};

export default useFileDownloader;
