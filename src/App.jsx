import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/sign-in-up/Login'
import Register from './pages/sign-in-up/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
