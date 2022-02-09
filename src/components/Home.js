import { useAuth } from '../context/authContext'

export function Home() {
  const { logout, user } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error.message)
    }
  }
  return(
    <div>
      <h1>Bienvenido {user.displayName || user.email}</h1>
      <button onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}
