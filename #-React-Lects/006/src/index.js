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
      let products = [
        ...this.state.products,
        { id: Math.random(), name: this.state.item },
      ];
      this.setState({
        products,
        item: "",
      });
    };

    this.deleteItem = (id) => {
      let products = [...this.state.products];
      let newProducts = products.filter((product) => product.id != id);
      this.setState({
        products: newProducts,
      });
    };
  }

  render() {
    // return JSX
    return (
      <div className="app">
        <Header />
        <AddItem
          changeInputVal={this.changeInputVal}
          saveData={this.submitForm}
          item={this.state.item}
        />
        <ListItems
          products={this.state.products}
          removeItem={this.deleteItem}
        />
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
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map((product) => (
            <Item
              product={product.name}
              removeItem={this.props.removeItem}
              id={product.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.product}
        <button onClick={() => this.props.removeItem(this.props.id)}>
          Delete
        </button>
      </li>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <form action="" onSubmit={this.props.saveData}>
          <input
            type="text"
            onChange={this.props.changeInputVal}
            value={this.props.item}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
