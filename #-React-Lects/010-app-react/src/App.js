import "./App.css";
import { Component } from "react";
// import TestComp from "./components/TestComp";
import TestHooksComp from "./components/TestHooksComp";

class App extends Component {
  
  render() {
    return (
      <div>
        {/* <TestComp x="Val" /> */}
        <TestHooksComp x="Val 1" y="Val 2" />
      </div>
    );
  }
}

export default App;
