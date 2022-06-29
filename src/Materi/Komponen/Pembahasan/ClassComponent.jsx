import React from "react";
import PropTypes from "prop-types";

class ClassComponent extends React.Component{
  state = {
    value: 0
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
      </div>
    )
  }
}

ClassComponent.propTypes = {
  title: PropTypes.string.isRequired
}

export default ClassComponent;