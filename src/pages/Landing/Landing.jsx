import { NavLink } from "react-router-dom";

// css
import styles from "./Landing.module.css";
import logo from '../../assets/images/logo.png'

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
                   src={logo}
                   alt="logo"
                   className={styles.logo}
                 />
                 <h2>Where to next?</h2>
               </div>
               <div className={styles.planningPicContainer}>
                 <img
                   src="src/assets/images/planning.jpg"
                   alt="planning"
                   className={styles.planningPic}
                 />
               </div>
             </div>
             <div className={styles.adventureContainer}>
               <div className={styles.adventurePicContainer}> 
                 <img src="src/assets/images/travelPic.jpg" alt="adventure picture" className={styles.adventurePic}/>
               </div>
               <div className={styles.adventureDescription}>
                 <h2>Your next adventure starts today</h2>
               </div>
             </div>
             <div className={styles.aboutUs}>
               <h1 className={styles.heading}>About Us</h1>
               <p>
               BAMM Voyage was built by a group of coders with a passion for traveling. Altogether they have visited over 50 countries! They saw the struggle in finding a good travel planning app, thus BAMM Voyage was born.
               </p>
             </div>
             <div className={styles.bammPics}>
               <div className={styles.bammPicsTop}>
                 <img
                   src="src/assets/images/melvinTravel.jpg"
                   alt="travel-pic"
                   className={styles.bammTravelMelvin}
                 />
                 <img
                   src="src/assets/images/monicaTravel.jpg"
                   alt="travel-pic"
                   className={styles.bammTravel}
                 />
               </div>
               <div className={styles.bammPicsBottom}>
                 <img
                   src="src/assets/images/andreaTravel.jpeg"
                   alt="travel-pic"
                   className={styles.bammTravel}
                 />
                 <img
                   src="src/assets/images/bobbyTravel.jpg"
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
            <div className={styles.intro}>
              <div className={styles.content}>
                <h3 className={styles.description}>Plan your next trip with</h3>
                <h1>BAMM VOYAGE</h1>
              </div>
              <div className={styles.box}>
                <div className={styles.one}>
                  <h4 className={styles.header}>Organize</h4>
                  <img
                    src="src/assets/images/checklist.png"
                    alt="checklist"
                    width="64"
                  />
                </div>
                <div className={styles.two}>
                  <h4 className={styles.header}>Countdown</h4>
                  <img
                    src="src/assets/images/calendar.png"
                    alt="countdown"
                    width="64"
                  />
                </div>
                <div className={styles.three}>
                  <h4 className={styles.header}>Budget Tracker</h4>
                  <img
                    src="src/assets/images/budget.png"
                    alt="budget tracker"
                    width="64"
                  />
                </div>
              </div>
              <div className={styles.loggedOutButtonContainer}>
                <NavLink to="/auth/login">
                  <button className={styles.landingButton}>Log In</button>
                </NavLink>
                <NavLink to="/auth/signup">
                  <button className={styles.landingButton}>Sign Up</button>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Landing;
