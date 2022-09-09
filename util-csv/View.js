/*      View      */
<Download fileName={"demo.txt"}>Download Txt</Download>;

const Download = ({ children, fileName }) => {
  const downloadRef = useRef();

  const { downloadFileHandler } = useFileDownloader(downloadRef);

  const clickHandler = async () => {
    const dataFile = await downloadService(fileName);

    downloadFileHandler(dataFile, blobType["TEXT/HTML"], "demo.txt");
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
