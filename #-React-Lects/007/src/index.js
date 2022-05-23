class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      option: "",
      submit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
      submit: false
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
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input id="name" type="text" onChange={this.handleChange} />
          <select id="option" onChange={this.handleChange}>
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

ReactDOM.render(<App />, document.getElementById("app"));

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [
//         { id: 1, name: "prod 1" },
//         { id: 2, name: "prod 2" },
//         { id: 3, name: "prod 3" },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.items.map(ele=> <div>{ele.name}</div>)
//         }
//         <Item />
//       </div>
//     );
//   }
// }

// const Item = () => {
//   return <div>Item</div>;
// };

// ReactDOM.render(<App />, document.getElementById("app"));

// class App extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         <Item />
//       </div>
//     );
//   }
// }

// const Item = () => {
//   return <div>Item</div>;
// };

// ReactDOM.render(<App />, document.getElementById("app"));
