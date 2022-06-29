import React from "react";
import PropTypes from "prop-types";
import style from './index.module.scss'

export default class Module extends React.Component{
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
            <button className={`${style.btn} ${style.btnInfo}`} onClick={this.saveValue}>Save Value</button>
            <span>Akumulasi Value: {this.state.compound}</span>
        </div>
      </div>
    )
  }
}

Module.propTypes = {
  title: PropTypes.string.isRequired
}