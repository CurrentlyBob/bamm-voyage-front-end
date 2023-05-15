import { Link } from "react-router-dom";
import moment from "moment";

import styles from "./ActivityCard.module.css";

const ActivityCard = ({ activity, itineraryId, handleDeleteActivity }) => {
  console.log(activity)
  return (
    <>
      <div className={styles.title}>
        <h2>{activity.category}</h2>
        <h2>{activity.name}</h2>
        <h2>${activity.cost}</h2>
      </div>
      <div className={styles.subtitle}></div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Activity Date</th>
            <th className={styles.th}>Notes</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>
              {moment(activity.date).format(
                "ddd MMMM Do, YYYY hh:mm a"
              )}
            </td>
            <td className={styles.td}>{activity.notes}</td>
            <td className={styles.td}>
              <>
                <Link
                  to={`/itineraries/${itineraryId}/activities/${activityId}}`}
                  state={activity}
                >
                  <button className={styles.button}>Edit</button>
                </Link>
                <button
                  className={styles.button}
                  onClick={() =>
                    handleDeleteActivity(itineraryId, activity._id)
                  }
                >
                  Delete
                </button>
              </>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ActivityCard;
