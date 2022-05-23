// Components
// Props

class App extends React.Component {
  // Products (Data)
  constructor() {
    super(); // inherit
    this.state = {
      name: "App State Component",
    };
  }

  render() {
    return (
      <div className="app">
        <Header test="hamada" />
        <ListItems pro="hamada" />
        <AddItem />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <header>Header</header>;
  }
}

class ListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hello React",
    };

    this.changeValue = (e) => {
      this.setState({
        name: "Finish React",
      });
    };
  }
  render() {
    return (
      <div>
        List Items <strong>{this.state.name}</strong>
        <br />
        <button onClick={this.changeValue}>Finish React</button>
        <br />
        <Item />
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <div>Item</div>;
  }
}

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Test",
    };

    this.changeText = (e) => {
      this.setState({
        text: e.target.value
      });
    };
  }
  render() {
    return (
      <div>
        <form action="">
          <input type="text" onChange={this.changeText} />
          <input type="submit" />
          <br />
          {this.state.text}
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App opps="app" />, document.getElementById("app"));
