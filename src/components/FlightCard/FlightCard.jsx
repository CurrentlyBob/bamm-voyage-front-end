import { Link } from "react-router-dom";
import styles from './FlightCard.module.css'


const FlightCard = ({ flight, itineraryId, handleDeleteFlight }) => {
  return (
    <>
      <div className={styles.flightContainer}>
        <div className={styles.flightTitle}>
          <h2>
            {flight.airline.charAt(0).toUpperCase()+ flight.airline.slice(1)}
          </h2>
          <h2>
            {flight.recordLocator}
          </h2>
        </div>
        <h2 className={styles.flightCost}>
          ${flight.cost}
        </h2>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Departure</th>
            <th className={styles.th}>Departure Airport</th>
            <th className={styles.th}>Arrival Date</th>
            <th className={styles.th}>Arrival Airport</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>{flight.departureDate}</td>
            <td className={styles.td}>{flight.departureAirport}</td>
            <td className={styles.td}>{flight.arrivalDate}</td>
            <td className={styles.td}>{flight.arrivalAirport}</td>
            <td className={styles.td}>
              <Link to={`/itineraries/${itineraryId}/flights/${flight._id}`} state={flight}>
              <button className={styles.editButton}>
                Edit
              </button>
                </Link>
                <button className={styles.editButton} onClick={() => handleDeleteFlight(itineraryId, flight._id)}>
                  Delete
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FlightCard;
