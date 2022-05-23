/*
  - StateFull Comp. (class based Comp.)
    > If has state in component
    >> class based Comp. = You identifier component with class
  - StateLess Comp. (UI) (function)
    > If NOT has state in component
  - Lists & Keys
  - Forms & Events
*/

// StateFull Comp.
class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   items: [
    //     { id: 1, name: "prod 1" },
    //     { id: 2, name: "prod 2" },
    //     { id: 3, name: "prod 3" },
    //   ],
    // };

    this.state = {
      name: "",
      option: "",
      submit: false,
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInputChange(e) {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // }

  // handleSelectChange(e) {
  //   this.setState({
  //     option: e.target.value,
  //   });
  // }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
      submit: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submit: true
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        {/* App
        {this.state.items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <Item /> */}

        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} id="name" />
          <select onChange={this.handleChange} id="option">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        {this.state.submit && (
          <div>
            {this.state.name}
            {this.state.option}
          </div>
        )}
      </div>
    );
  }
}

// StateLess Comp.
const Item = () => {
  return <div>Item</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
