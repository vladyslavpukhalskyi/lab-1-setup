import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(18)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (includeLowercase) chars += lowercase
    if (includeUppercase) chars += uppercase
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    if (chars === '') {
      setPassword('Please select at least one character type')
      return
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="options">
        <div className="option">
          <label>
            Password Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="1"
              max="100"
            />
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            Include Lowercase Letters
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Include Uppercase Letters
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Include Special Symbols
          </label>
        </div>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div className="password-display">
        <h2>Generated Password:</h2>
        <code>{password}</code>
      </div>
    </div>
  )
}

export default App
