import React, { Component } from "react";
import Banner from "../Components/Banner";
import {FaBars} from "react-icons/fa";

export default class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          toggle: false
        }
        this.toggler = this.toggler.bind(this);
      }

      toggler() {
        this.setState((prevState) => {
            return{
                toggle: !prevState.toggle
            }
        })
      }

  render() {
    return (
      <header>
        <div>
          <div className="logo">
            Start Bootstrap
          </div>
            <button onClick={this.toggler} className="menu">
                <FaBars className="menu-icon" />
            </button>
          <nav className={this.state.toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#/services">SERVICES</a>
              </li>
              <li>
                <a href="#/portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#/about">ABOUT</a>
              </li>
              <li>
                <a href="#/team">TEAM</a>
              </li>
              <li>
                <a href="#/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="banner">
              <Banner />
          </div>
      </header>
    );
  }
}
