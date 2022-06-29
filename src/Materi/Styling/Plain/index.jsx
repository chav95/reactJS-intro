import React from "react";
import PropTypes from "prop-types";
import './index.css'

export default class Plain extends React.Component{
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

  render(){
    return (
      <div>
        <h2>Welcome to {this.props.title}</h2>
        <button onClick={this.handleMinus}>-</button>
        <span>{' '}{this.state.value}{' '}</span>
        <button onClick={this.handlePlus}>+</button>
        <br/>
        <div>
            <button className="btn btn-info">Save Value</button>
            <span>Akumulasi Value: {this.state.compound}</span>
        </div>
      </div>
    )
  }
}

Plain.propTypes = {
  title: PropTypes.string.isRequired
}