function downloadFileWithBlob() {
  const data = `
Dato Opcional 1;Dato Opcional 2;Id User;Nro Tarjeta;Importe
`;

  const blob = new Blob([data], { type: "octec-stream" });

  const href = URL.createObjectURL(blob);

  const a = Object.assign(document.createElement("a"), {
    href,
    style: "display:none",
    download: "myData.csv",
  });

  document.body.appendChild(a);

  a.click();

  URL.revokeObjectURL(href);
  a.remove();
}

export default downloadFileWithBlob;
