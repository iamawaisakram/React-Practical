import logo from "./logo.svg";
import "./App.css";
import PureComponent, { NonPrimitivePureComponent } from "./PureComponents";

function App() {
  return (
    <div className="App">
      <PureComponent />
      <NonPrimitivePureComponent />
    </div>
  );
}

export default App;
