import logo from "./logo.svg";
import "./App.css";
import PureComponent, { NonPrimitivePureComponent } from "./PureComponents";
import Hooks from "./Hooks";

function App() {
  return (
    <div className="App">
      <PureComponent />
      {/* <NonPrimitivePureComponent /> */}
      <Hooks />
    </div>
  );
}

export default App;
