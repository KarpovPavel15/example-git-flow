import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";

export default class App extends Component {
  render() {
    return (
        <div className="app">
          <Header/>
          <main>Main</main>
          <footer>footer</footer>
        </div>
    );
  }
}