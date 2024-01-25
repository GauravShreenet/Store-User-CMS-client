import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Login from './pages/sign-in-up/Login'
import Register from './pages/sign-in-up/Register'
import PasswordReset from './pages/sign-in-up/PasswordReset'
import VerifyEmail from './pages/sign-in-up/VerifyEmail'
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Routes>

        {/* public route */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* private route */}

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
