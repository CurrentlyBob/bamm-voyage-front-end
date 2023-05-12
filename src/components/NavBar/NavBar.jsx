// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul className={styles.linkContainer}>
          <div className={styles.links}>
            <li><NavLink to ="/itineraries">Itineraries</NavLink></li>
            <li><NavLink to ="/new">Create Itinerary</NavLink></li>
          </div>
          <div className={styles.profile}>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          </div>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul> 
      }
    </nav>
  )
}

export default NavBar
