import logo from "./logo.svg";
import "./App.css";
import PureComponent, { NonPrimitivePureComponent } from "./PureComponents";
import UseStateHook from "./Hooks/useState";

function App() {
  return (
    <div className="App">
      <PureComponent />
      {/* <NonPrimitivePureComponent /> */}
      <UseStateHook />
    </div>
  );
}

export default App;
