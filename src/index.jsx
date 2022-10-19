import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Cards from "./Cards";
import SecOne from "./SecOne";
import './sass/style.css';


class App extends Component{
  render(){
    return(
      <div>
        <SecOne/>
      </div>
    )
  }
}

ReactDOM.render(<App/> ,document.querySelector('#root'));