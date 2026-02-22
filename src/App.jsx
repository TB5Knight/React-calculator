import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])

  const calculate = (expression, value) => {
    setResult(value)
    setHistory(prev => [...prev, { id: Date.now(), expression, result: value }].slice(-10))
  }

  const add = () => calculate(`${num1} + ${num2}`, num1 + num2)
  const subtract = () => calculate(`${num1} - ${num2}`, num1 - num2)
  const multiply = () => calculate(`${num1} * ${num2}`, num1 * num2)
  const divide = () => {
    if (num2 === 0) {
      setResult('Cannot divide by zero')
      return
    }
    calculate(`${num1} / ${num2}`, num1 / num2)
  }

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
      {history.length > 0 && (
        <div className="history">
          <ul>
            {history.map((entry) => (
              <li key={entry.id}>{entry.expression} = {entry.result}</li>
            ))}
          </ul>
          <div className="history-footer">
            <button onClick={() => setHistory([])}>Clear History</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
