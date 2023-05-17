import moment from 'moment'

import AccommodationKebabMenu from "../KebabMenus/AccommodationKebabMenu";
import styles from './AccommodationCard.module.css'

const AccommodationCard = ({
  accommodation,
  itineraryId,
  handleDeleteAccommodation,
}) => {
  return (
    <>
      <div className={styles.accommodationContainer}>
        <div className={styles.title}>
          <h2>{accommodation.name}</h2>
          <h2>{accommodation.type}</h2>
        </div>
          <h2 className={styles.accommodationCost}>${accommodation.cost}</h2>
          <div>
            <AccommodationKebabMenu accommodation={accommodation} itineraryId={itineraryId} handleDeleteAccommodation={handleDeleteAccommodation}/>
          </div>
      </div>
      <div className={styles.subtitle}>
        <p>{accommodation.address}</p>
        <p id="url">
        <a className={styles.accomodationUrl} href={`http://${accommodation.website}`} target="_blank" rel="noreferrer">
    {accommodation.website}
    </a>
        </p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>CheckIn Date</th>
            <th className={styles.th}>CheckOut Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>{moment(accommodation.checkInDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
            <td className={styles.td}>{moment(accommodation.checkOutDate).format('ddd MMMM Do, YYYY hh:mm a')}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AccommodationCard;
