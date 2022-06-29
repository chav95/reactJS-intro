import { useState } from "react"

const FunnctionalComponent = (props)=> {
  const [value, setValue] = useState(0)

  const handlePlus = ()=>{
    setValue(value+1)
  }
  const handleMinus = ()=> {
    setValue(value-1)
  }

  return (
    <div>
      <h2>Welcome to {props.title}</h2>
      <button onClick={handleMinus}>-</button>
      <span>{' '}{value}{' '}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

FunnctionalComponent.defaultProps = {
  title: "React Intro"
}

export default FunnctionalComponent