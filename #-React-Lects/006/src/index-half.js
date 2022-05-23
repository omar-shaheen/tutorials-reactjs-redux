// Components
// Props

// [ Stoped in 23:00 m || #81:Lecture  ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      item: "",
    };

    this.changeInputVal = (e) => {
      this.setState({
        item: e.target.value,
      });
    };

    this.submitForm = (e) => {
      e.preventDefault();
      let products = [...this.state.products, this.state.item];
      this.setState({
        products,
        item: '',
      });
    };
  }

  render() {
    // return JSX
    return (
      <div className="app">
        <Header />
        <AddItem
          changeInput={this.changeInputVal}
          submitForms={this.submitForm}
          items={this.state.item}
        />
        <ListItems products={this.state.products} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <header>Todo List App</header>;
  }
}

class ListItems extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map((product) => (
            <Item item={product} />
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={this.props.submitForms}>
          <input type="text" onChange={this.props.changeInput} value={this.props.items} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
