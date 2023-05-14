// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      <img className={styles.logo} src="../../../public/assets/images/logo-transparent-back.png" alt="logo"/>
      {user ?
        <ul className={styles.linkContainer}>
          <div className={styles.links}>
            <li><NavLink to ="/itineraries">Itineraries</NavLink></li>
            <li><NavLink to ="/itineraries/new">Create Itinerary</NavLink></li>
          </div>
          <div className={styles.profile}>
            <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
            <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          </div>
        </ul>
      :
        <ul className={styles.linkContainer}>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul> 
      }
    </nav>
  )
}

export default NavBar
