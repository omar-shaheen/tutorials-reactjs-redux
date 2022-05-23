import "./App.css";
import { Component } from "react";
import CompA from "./components/CompA";
import { CnxtProvider } from "./components/ContextComp";

class App extends Component {
  state = {
    name: "App Comp"
  }
  render() {
    return (
      <CnxtProvider value={this.state.name}>
        <div className="App">
          <CompA />
        </div>
      </CnxtProvider>
    );
  }
}

export default App;
