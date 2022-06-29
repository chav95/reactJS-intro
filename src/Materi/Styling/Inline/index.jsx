import { useState } from "react"

const Inline = (props)=> {
  const [value, setValue] = useState(0)
  const [compound, setCompound] = useState(0)

  const handlePlus = ()=>{
    setValue(value+1)
  }
  const handleMinus = ()=> {
    setValue(value-1)
  }
  const saveValue = ()=> {
    setCompound(compound+value)
  }
    
  const button = {
    color: 'goldenrod',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    margin: '2px 5px',
  }

  const div = {
    margin: '10px 5px',
    padding: '5px',
  }

  return (
    <div>
      <h2>Welcome to {props.title}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{' '}{value}{' '}</span>
      <button onClick={handlePlus}>+</button>
      <br/>
      <div style={div}>
          <button style={button} onClick={saveValue}>Save Value</button>
          <span>Akumulasi Value: {compound}</span>
      </div>
    </div>
  )
}

Inline.defaultProps = {
  title: "React Intro"
}

export default Inline