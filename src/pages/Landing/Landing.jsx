import { NavLink } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <>
      {user 
        ? 
          <div className={styles.container}>
            <h1>hello, {user ? user.name : 'friend'}</h1>
          </div>
        :
          <div className={styles.loggedOutContainer}>
            <h1>BAMM Voyage</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptas magnam deleniti eligendi voluptates maxime, nobis ea, quis eveniet totam laboriosam, ullam cum quia est soluta harum corporis libero!</h3>
            <div className={styles.loggedOutButtonContainer}>
              <button>
                <NavLink to="/auth/login">Log In</NavLink>
              </button>
              <button>
              <NavLink to="/auth/signup">Sign Up</NavLink>
              </button>
            </div>

          </div>
      }
    </>
  )
}

export default Landing
