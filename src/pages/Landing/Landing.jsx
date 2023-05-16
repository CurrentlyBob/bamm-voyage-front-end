import { NavLink } from "react-router-dom";

// css
import styles from "./Landing.module.css";

const Landing = ({ user }) => {
  return (
    <>
      {user ? (
        <main className={styles.loggedInBackground}>
          {/* <div className={styles.bamm}>
            <h1>BAMM Voyage</h1>
            <img src="../../../public/assets/images/logo-transparent-back.png" alt="logo" className=""/>
          </div> */}
          <div className={styles.aboutUs}>
            <h1 className={styles.heading}>About Us</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque voluptatem, quas cupiditate suscipit tempora rerum, eius minima, accusantium reprehenderit eos laborum aspernatur excepturi officiis. Possimus perferendis velit reiciendis sunt.</h3>
          </div>
          <div className={styles.bammPics}>
            <h1 className={styles.heading}>About Us</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque voluptatem, quas cupiditate suscipit tempora rerum, eius minima, accusantium reprehenderit eos laborum aspernatur excepturi officiis. Possimus perferendis velit reiciendis sunt.</h3>
          </div>
        </main>
      ) : (
        <main className={styles.loggedOutBackground} >
          <div className={styles.loggedOutContainer}>
            <h1>BAMM Voyage</h1>
            <h3 className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur recusandae voluptas magnam deleniti eligendi voluptates
              maxime, nobis ea, quis eveniet totam laboriosam, ullam cum quia
              est soluta harum corporis libero!
            </h3>
            <div className={styles.loggedOutButtonContainer}>
                <NavLink to="/auth/login">
                <button className={styles.landingButton}>
                  Log In
                </button>
              </NavLink>
              <NavLink to="/auth/signup">
                <button className={styles.landingButton}>
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Landing;
