import moment from 'moment'
import styles from './FlightCard.module.css'

import FlightKebabMenu from '../KebabMenus/FlightKebabMenu'

const FlightCard = ({ flight, itineraryId, handleDeleteFlight, isFirstFlight }) => {
  return (
    <>
      {isFirstFlight && (
        <div className={styles.flightContainer}>
          <div className={styles.flightTitle}>
            <h2>
              {flight.airline.charAt(0).toUpperCase() + flight.airline.slice(1)}: #{flight.recordLocator}
            </h2>
          </div>
          <h2 className={styles.flightCost}>${flight.cost.toLocaleString('en-US')}</h2>
        </div>
      )}
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            {isFirstFlight && (
              <tr>
                <th className={styles.th}>Departure Date</th>
                <th className={styles.th}>Departure Airport</th>
                <th className={styles.th}>Arrival Date</th>
                <th className={styles.th}>Arrival Airport</th>
                <th className={styles.th}></th>
              </tr>
            )}
          </thead>

          <tbody>
            <tr className={styles.tr}>
              <td className={styles.td}>{moment.utc(flight.departureDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
              <td className={styles.td}>{flight.departureAirport}</td>
              <td className={styles.td}>{moment.utc(flight.arrivalDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
              <td className={styles.td}>{flight.arrivalAirport}</td>
              <td className={styles.td}>
                <FlightKebabMenu flight={flight} itineraryId={itineraryId} handleDeleteFlight={handleDeleteFlight} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default FlightCard
