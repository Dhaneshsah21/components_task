import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Components
import ProfileCardFn from './components/ProfileCardFn'
import RenderingPlayground from './components/RenderingPlayground'
import UserStatus from './components/UserStatus'
import HOCLab from './components/hoc/HOCLab'

// Page Components
const Home = ({ user, toggleUser }) => (
  <div className="home-container">
    <h1>React Concepts Lab</h1>

    <section className="section">
      <h2>1. Profile Card</h2>
      <ProfileCardFn />
    </section>

    <section className="section">
      <h2>2. User Status (Conditionals)</h2>
      <div className="status-controls">
        <button onClick={toggleUser}>
          Toggle User (Current: {user ? 'Logged In' : 'Null'})
        </button>
      </div>
      <UserStatus user={user} />
    </section>

    <section className="section">
      <h2>3. Rendering Playground</h2>
      <RenderingPlayground />
    </section>

    <section className="section">
      <HOCLab />
    </section>
  </div>
)

const About = () => <div className="page"><h2>About Page</h2><p>This is the About page.</p></div>
const Contact = () => <div className="page"><h2>Contact Page</h2><p>Contact us at example@email.com</p></div>

function App() {
  const [user, setUser] = useState(null)

  const toggleUser = () => {
    setUser(prev => prev ? null : {
      name: "Amit Verma",
      email: "amit.verma@example.in",
      isActive: true
    })
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">React Lab</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home user={user} toggleUser={toggleUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
