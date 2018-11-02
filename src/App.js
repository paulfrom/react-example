import React, { Component } from 'react';
import   CommentInput  from "./comment/CommentInput";
import  CommentList  from "./comment/CommentList";
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <CommentInput />
        <CommentList />
      </div>
    );
  }
}

export default App;
