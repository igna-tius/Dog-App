import React, { Component } from "react";
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";
import bruno from "./imgs/bruno.jpg";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whisley is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has sooo much energy.",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.!"
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog.",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food"
        ]
      },
      {
        name: "Bruno",
        age: 2,
        src: bruno,
        facts: [
          "Bruno loves to eat.",
          "Bruno has a teddy bear.",
          "Bruna loves to cuddle with you!"
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <NavBar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
