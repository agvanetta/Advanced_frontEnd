import "./App.css";
//import GlobalRedux from "./redux/GlobalRedux";
import { Provider } from "react-redux";
import store from "./store";
import { Contador } from "./components/Contador";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <>
          <Contador />
        </>
      </div>
    </Provider>
  );
}

export default App;
