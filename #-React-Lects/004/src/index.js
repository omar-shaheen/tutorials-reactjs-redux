// Components
// Props

class App extends React.Component {
  render() {
    // return JSX
    return (
      <div className="app">
        <Header />
        <ListItems />
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
  render() {
    return (
      <div>
        List Items
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
  render() {
    return (
      <div>
        <form action="">
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
