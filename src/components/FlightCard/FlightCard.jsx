import moment from "moment";
import styles from './FlightCard.module.css';

import FlightKebabMenu from "../KebabMenus/FlightKebabMenu";

const FlightCard = ({ flight, itineraryId, handleDeleteFlight, isFirstFlight }) => {
  return (
    <>
      {isFirstFlight && (
        <div className={styles.flightContainer}>
          <div className={styles.flightTitle}>
            <h2>{flight.airline.charAt(0).toUpperCase() + flight.airline.slice(1)}:</h2>
            <h2>{flight.recordLocator}</h2>
            <h2 className={styles.flightCost}>${flight.cost.toLocaleString('en-US')}</h2>
            <div>
              <FlightKebabMenu 
                flight={flight}
                itineraryId={itineraryId}
                handleDeleteFlight={handleDeleteFlight}
              />
            </div>
          </div>
        </div>
      )}
      
      <table className={styles.table}>
        <thead>
          {isFirstFlight && (
            <tr>
              <th className={styles.th}>Departure</th>
              <th className={styles.th}>Departure Airport</th>
              <th className={styles.th}>Arrival Date</th>
              <th className={styles.th}>Arrival Airport</th>
            </tr>
          )}
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>{moment(flight.departureDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
            <td className={styles.td}>{flight.departureAirport}</td>
            <td className={styles.td}>{moment(flight.arrivalDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
            <td className={styles.td}>{flight.arrivalAirport}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FlightCard;