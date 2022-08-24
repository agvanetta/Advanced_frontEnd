import "./App.css";
import Provider from "react-redux";
import store from "./store";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <ShoppingCart />
        </header>
      </div>
    </Provider>
  );
}

export default App;
