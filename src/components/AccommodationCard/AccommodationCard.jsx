import moment from 'moment'

import AccommodationKebabMenu from '../KebabMenus/AccommodationKebabMenu'
import styles from './AccommodationCard.module.css'

const AccommodationCard = ({ accommodation, itineraryId, handleDeleteAccommodation }) => {
  return (
    <>
      <div className={styles.accommodationContainer}>
        <div className={styles.title}>
          <h2>{accommodation.type}:</h2>
          <h2>{accommodation.name}</h2>
        </div>
        <h2 className={styles.accommodationCost}>${accommodation.cost.toLocaleString('en-US')}</h2>
        <AccommodationKebabMenu
          accommodation={accommodation}
          itineraryId={itineraryId}
          handleDeleteAccommodation={handleDeleteAccommodation}
        />
      </div>
      <div className={styles.subtitle}>
        <p>{accommodation.address}</p>
        <p id="url">
          <a className={styles.accomodationUrl} href={accommodation.website} target="_blank" rel="noreferrer">
            {accommodation.name}'s website
          </a>
        </p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Check In Date</th>
              <th className={styles.th}>Check Out Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>{moment.utc(accommodation.checkInDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
              <td className={styles.td}>{moment.utc(accommodation.checkOutDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AccommodationCard
