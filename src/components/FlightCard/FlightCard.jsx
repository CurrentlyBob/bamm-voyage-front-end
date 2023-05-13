import { Link } from "react-router-dom";
import styles from './FlightCard.module.css'


const FlightCard = ({ flight, itineraryId }) => {
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
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Departure Airport</th>
            <th>Arrival Date</th>
            <th>Arrival Airport</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.departureDate}</td>
            <td>{flight.departureAirport}</td>
            <td>{flight.arrivalDate}</td>
            <td>{flight.arrivalAirport}</td>
            <td>
              <Link to={`/itineraries/${itineraryId}/flights/${flight._id}`} state={flight}>
              <button className={styles.editButton}>
                Edit
              </button>
                </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FlightCard;
