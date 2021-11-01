import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Todos from "./PostData";
import Details from "./Details";
import axios from "axios";
import NewPost from "./NewPost";

class App extends Component {
    state = {
      posting: []
    };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((data) => {
      this.setState({
        posting: data.data,
      });
    });
  }
  newPost = (text) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:text,
    completed:false
    }).then(res => this.setState({ posting: [res.data, ...this.state.posting] }));
  };

  delPost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
      posting: [...this.state.posting.filter((item) => item.id !== id)],
    }));

  };

  render() {
    return (
      <div className="myBlog">
        <Router>
          <Header />
          <Route exact path="/" render={props=>(
              <React.Fragment>
                  <NewPost newPost={this.newPost} />
                  <Todos
                  posting={this.state.posting}
                  delPost={this.delPost}
                />
              </React.Fragment>
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/postdata/:id">
            <Details />
          </Route>
      </Router>
      </div>
      
    );
  }
}

export default App;

