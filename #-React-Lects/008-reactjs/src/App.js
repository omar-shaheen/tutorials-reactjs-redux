import "./App.css";
import { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

class App extends Component {
  state = {
    name: "OMAR",
    products: [
      { id: 1, title: "Item 1" },
      { id: 2, title: "Item 2" },
      { id: 3, title: "Item 3" },
    ],
  };
  render() {
    return (
      <div className="App">
        <Header title="Header" name={this.state.name} />
        Content Here... <br />
        <List products={this.state.products} />
        <Footer title="Footer" />
      </div>
    );
  }
}

export default App;
