import React, { Component } from "react";
import { Logo } from "./logo";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <nav>
          <a
            href="index.html"
            style={{
              color: "#fff",
              marginBottom: "10px",
              textDecoration: "none",
            }}
          >
            <img
              src={Logo}
              style={{
                width: "40px",
                height: "40px",
                marginTop: "15px",
                borderRadius: "8px",
              }}
            />
            Bulk Mailer
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/batch">Batches</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div id="mobile">
            <i
              id="bar"
              onClick={this.handleClick}
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
