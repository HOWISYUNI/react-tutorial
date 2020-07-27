import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
          <h1>React Tutorial</h1>
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">Component</a></li>
          <li><a href="2.html">State</a></li>
          <li><a href="3.html">Event</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        Component article. Tools making React coding easier than what I used do.
      </article> 
    );
  }
}

class App extends Component{
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;

