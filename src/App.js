import { Provider } from "react-redux";
import { store } from './store';
import Calculator from "./components/Calculator";

function App() {
  return (
    <Provider store={store}>
	  <div className="main-container">
        <Calculator />
        "and here is the new text"
      </div>
	</Provider>
  );
}

export default App;
