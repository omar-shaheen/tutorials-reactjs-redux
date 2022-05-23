import "./App.css";
import { Component } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import Home from "./components/Home";

import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import Post from "./components/Post";

import axios from "axios";

class App extends Component {
  state = {
    // name: "App Comp",
    // posts: [],
    userid: "",
    title: "",
    body: "",
  };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => this.setState({ posts: res.data }))
  //     .catch((err) => console.log("Somthing Went Wrong!", err));
  // }

  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitData = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => console.log(res));
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />

        {/* <ul>
          {this.state.posts.length
            ? this.state.posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
              })
            : ""}
        </ul> */}

        <form action="" onSubmit={this.submitData}>
          <input type="text" name="userid" onChange={this.changeData} />
          <input type="text" name="title" onChange={this.changeData} />
          <input type="text" name="body" onChange={this.changeData} />

          <button type="submit">Add Data</button>
        </form>
        
        <div className="card">
            {this.state.userid} <br />
            {this.state.title} <br />
            {this.state.body} <br />
        </div>

        <Route exact path="/" component={Home} />
        <Route exact path="/compa" component={CompA} />
        <Route exact path="/compb" component={CompB} />
        <Route exact path="/postlists" component={PostList} />
        <Route exact path="/postlists/:id" component={Post} />
      </BrowserRouter>
    );
  }
}

export default App;
