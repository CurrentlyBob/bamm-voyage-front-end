import { NavLink } from "react-router-dom";

// css
import styles from "./Landing.module.css";

const Landing = ({ user }) => {
  return (
    <>
      {user ? (
        <main className={styles.loggedInBackground}>
          <div className={styles.landingContainer}>
            <div className={styles.bammContainer}>
              <div className={styles.bamm}>
                <h1 className={styles.heading}>BAMM Voyage</h1>
                <img
                  src="../../../public/assets/images/logo.png"
                  alt="logo"
                  className={styles.logo}
                />
                <h3>Where to next?</h3>
              </div>
              <img
                src="../../../public/assets/images/planning.jpg"
                alt="planning"
                className={styles.planningPic}
              />
            </div>
            <div className={styles.aboutUs}>
              <h1 className={styles.heading}>About Us</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                atque voluptatem, quas cupiditate suscipit tempora rerum, eius
                minima, accusantium reprehenderit eos laborum aspernatur excepturi
                officiis. Possimus perferendis velit reiciendis sunt.
              </h3>
            </div>
            <div className={styles.bammPics}>
              <div className={styles.bammPicsTop}>
                <img
                  src="../../../public/assets/images/melvinTravel.jpg"
                  alt="travel-pic"
                  className={styles.bammTravelMelvin}
                />
                <img
                  src="../../../public/assets/images/monicaTravel.jpg"
                  alt="travel-pic"
                  className={styles.bammTravel}
                />
              </div>
              <div className={styles.bammPicsBottom}>
                <img
                  src="../../../public/assets/images/andreaTravel.jpeg"
                  alt="travel-pic"
                  className={styles.bammTravel}
                />
                <img
                  src="../../../public/assets/images/bobbyTravel.jpg"
                  alt="travel-pic"
                  className={styles.bammTravelBobby}
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className={styles.loggedOutBackground}>
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
                <button className={styles.landingButton}>Log In</button>
              </NavLink>
              <NavLink to="/auth/signup">
                <button className={styles.landingButton}>Sign Up</button>
              </NavLink>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Landing;
