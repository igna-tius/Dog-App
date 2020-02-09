import React, { Component } from "react";
import "./DogList.css";
import { NavLink } from "react-router-dom";
export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-4 mb-5">Dog List!</h1>

        <div className="row">
          {this.props.dogs.map(d => (
            <div className="Dog col-lg-4 text-center" key={d.name}>
              <NavLink to={`/dogs/${d.name}`}>
                <img src={d.src} alt={d.name} />

                <h3 className="underline mt-3">{d.name}</h3>
              </NavLink>{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
