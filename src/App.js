import { Routes, Route } from 'react-router-dom'
import Alert from './components/Alert'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'

export default function() {
  return(
    <div className='bg-slate-300 h-screen text-white flex'>
      <AuthProvider>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}