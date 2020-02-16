import React, { Component } from "react";
import "./CardStyle.css";
import Master from "./master.png";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardHolder: "",
      validThru: ""
    };
  }
  testdate = x => {
    return x.slice(0, 2) + "/" + x.slice(2);
  };
  testcardNumber = x => {
    return (
      x.slice(0, 4) +
      " " +
      x.slice(4, 8) +
      " " +
      x.slice(8, 12) +
      " " +
      x.slice(12)
    );
  };
  changeHandlerCardHolder = e => {
    let regExp = /^[A-Za-z\\s]+$/;
    if (regExp.test(e.target.value))
      this.setState({
        cardHolder: e.target.value
      });
  };
  changeHandlerCardNumber = e => {
    let regExp = /^[0-9]*$/;
    if (regExp.test(e.target.value))
      this.setState({ cardNumber: e.target.value });
  };
  changeHandlerValidThru = e => {
    let regExp = /[^0-9]/gi;
    if (
      !e.target.value.match(regExp) &&
      e.target.value.slice(0, 1) < 13 &&
      e.target.value.slice(0, 2) < 13
    )
      this.setState({
        validThru: e.target.value
      });
  };
  render() {
    return (
      <div>
        <div className="CardBox">
          <h1>Company Name</h1>
          <div className="credit-card-content">
            <span>
              {this.testcardNumber(this.state.cardNumber.padEnd(16, "."))}
            </span>
            <br />
            <span>{this.testdate(this.state.validThru.padEnd(4, "."))}</span>
            <br />
            <span className="credit-card-holder-name">
              {this.state.cardHolder.toUpperCase()}
            </span>
          </div>
          <div className="image-logo">
            <img src={Master} alt="master" className="image"></img>
          </div>
          {/* <div className="credit-card-content">
            <div className="credit-card-text"></div>
          </div> */}
        </div>
        <div className="inputs">
          <input
            type="text"
            maxLength="16"
            onChange={e => this.changeHandlerCardNumber(e)}
            value={this.state.cardNumber}
          ></input>
          <input
            type="text"
            value={this.state.validThru}
            maxLength="4"
            onChange={e => this.changeHandlerValidThru(e)}
          ></input>

          <input
            type="text"
            onChange={e => this.changeHandlerCardHolder(e)}
            value={this.state.cardHolder}
          ></input>
        </div>
      </div>
    );
  }
}

export default Card;
