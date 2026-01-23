import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const add = () => setResult(num1 + num2)
  const subtract = () => setResult(num1 - num2)
  const multiply = () => setResult(num1 * num2)
  const divide = () => setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero')

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value) || 0)}
          placeholder="First number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value) || 0)}
          placeholder="Second number"
        />
      </div>
      <div className="buttons">
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>
      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  )
}

export default App
