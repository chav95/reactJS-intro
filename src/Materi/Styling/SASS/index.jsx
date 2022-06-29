import React from "react";
import PropTypes from "prop-types";
import './index.scss'

export default class Sass extends React.Component{
  state = {
    value: 0,
    compound: 0,
  }

  handlePlus = ()=>{
    this.setState({value: this.state.value + 1})
  }
  handleMinus = ()=> {
    this.setState({value: this.state.value - 1})
  }
  saveValue = ()=> {
    this.setState({compound: this.state.compound + this.state.value})
  }

  render(){
    return (
      <div>
        <h2>Welcome to {this.props.title}</h2>
        <button onClick={this.handleMinus}>-</button>
        <span>{' '}{this.state.value}{' '}</span>
        <button onClick={this.handlePlus}>+</button>
        <br/>
        <div>
            <button className="btn btn-danger" onClick={this.saveValue}>Save Value</button>
            <span>Akumulasi Value: {this.state.compound}</span>
        </div>
      </div>
    )
  }
}

Sass.propTypes = {
  title: PropTypes.string.isRequired
}