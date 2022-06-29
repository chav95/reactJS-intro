import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid black;
  background-color: white;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
  border-color: #2196f3;
  color: dodgerblue;

  &:hover{
    background-color: #2196f3;
    color: white;
  }
`

export default class Styled extends React.Component{
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
            <Button onClick={this.saveValue}>Save Value</Button>
            <span>Akumulasi Value: {this.state.compound}</span>
        </div>
      </div>
    )
  }
}

Styled.propTypes = {
  title: PropTypes.string.isRequired
}