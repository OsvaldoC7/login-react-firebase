import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import Login from './components/Login'
import { ProtectedRoute } from './components/ProtectedRoute'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'

export default function() {
  return(
    <div className='bg-gray-100 h-screen text-white flex'>
      <AuthProvider>
        <Routes>
          <Route  path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route  path='/login' element={<Login />} />
          <Route  path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}