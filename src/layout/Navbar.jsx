import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";


/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate()
  
  function handleLogout(){
    logout();
    navigate('/activities')
  }
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to ='/activities'>Activities</NavLink>
        {token ? (
          <a onClick={handleLogout}>Log out</a>
        ) : (
          <>
            <NavLink to ='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
