import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const value = useContext(AuthContext);
  const auth = value?.auth;

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <p>{auth?.username}</p>
    </div>
  )
}

export default Header