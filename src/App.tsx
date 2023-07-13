import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <div className="logo"></div>
          <div>
            <button className ="nav-link" >Home</button>
            <button className ="nav-link">Projects</button>
          </div>
        </nav>
      </header>
      <main className="flex-vertical">
        <div className="container">
          <h1 className="name">Kartikesh Mishra</h1>
          <p className="subtitle">| Student | Researcher | Developer | Designer |</p>
          <div className="social-icons" id ="social-icons"></div>
          <p></p>
          <button className="resume">View my Resume</button>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
