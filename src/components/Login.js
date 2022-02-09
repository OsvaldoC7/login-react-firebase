import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from './Alert'

export default function Login() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch(error) {
      setError(error.message)
    }
  }
  
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch(error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async () => {
    if(!user.email) return setError('Por favor ingresa un email')
    setError('')
    try {
      await resetPassword(user.email)
      setError('Te fue enviado un email para recuperar tu contraseña')
    } catch(error) {
      setError(error.message)
    }
  }

  return(
    <div className='self-center mx-auto'>
      <Alert message={error ?? ''} />
      <div className="bg-white self-center mx-auto p-8 rounded-xl shadow-lg w-96">
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 mb-6 w-full group">
              <input 
                type="email" name="email" id="email" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " required 
                onChange={handleChange}
              />
              <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
              <input 
                type="password" name="password" id="password" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " required 
                onChange={handleChange}
              />
              <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
          <button onClick={handleGoogleSignin} className="text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Google</button>
        </form>

        <div className="flex justify-center pt-5">
          <a 
            href='#' onClick={handleResetPassword}
            className="text-blue-700 underline"
          >
            Recuperar password
          </a>
        </div>
      </div>
      <p className="text-gray-700 text-center py-5">
        No tienes una cuenta? <Link to="/register" className="text-blue-700">Registrate</Link>
      </p>
    </div>
  )
}
