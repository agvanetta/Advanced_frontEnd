const DownloadFileService = (file, saveAs) => {
    const downloadInstance = document.createElement('a');
    downloadInstance.href = file;
    downloadInstance.download = saveAs;
  
    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
  };
  
  export default DownloadFileService;
  