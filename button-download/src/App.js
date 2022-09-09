import "./App.css";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import Download from "./components/View";
import presentationTemplate from "./template/presentationTemplate.csv"
import ButtonBlob from "./components/ButtonBlob"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Download file={"presentationTemplate.csv"}>Download con Blob</Download>

        <br />

        <Button2 />

        <br />

      <Button3/>

      <br />

      <button
      onClick={() => ButtonBlob()}
      >Test 3 </button>

      </header>
    </div>
  );
}

export default App;
