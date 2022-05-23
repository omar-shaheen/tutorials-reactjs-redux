import "./App.css";
import { Component } from "react";
// import Refs from "./components/Refs";
import CallbackRefs from "./components/CallbackRefs";
// import CompA from "./components/CompA";
// import CompB from "./components/CompB";
// import Comp from "./components/Comp";
// import RenderProps from "./components/RenderProps";

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Refs /> */}

        <CallbackRefs />

        {/* <RenderProps hamada={(value, value2)=> {
          return <div> {value} {value2}</div>;
        }} />

        <Comp
          render={(arg1, arg2) => <CompA name={arg1} updateNameState={arg2} />}
        />
        <Comp
          render={(arg1, arg2) => <CompB name={arg1} updateNameState={arg2} />}
        /> */}
        {/* <CompA test="test Comp A" /> */}
        {/* <CompB /> */}
      </div>
    );
  }
}

export default App;
