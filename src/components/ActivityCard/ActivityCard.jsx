import { Link } from "react-router-dom";
import moment from "moment";

import styles from "./ActivityCard.module.css";
import ActivityKebabMenu from "../KebabMenus/ActivityKebabMenu";

const ActivityCard = ({ activity, itineraryId, handleDeleteActivity }) => {
  console.log(activity)
  return (
    <>
      <div className={styles.title}>
        <h2>{activity.category}</h2>
        <h2>{activity.name}</h2>
        <h2>${activity.cost}</h2>
        <div>
        <ActivityKebabMenu activity={activity} itineraryId={itineraryId} handleDeleteActivity={handleDeleteActivity}/>
      </div>
      </div>
      <div className={styles.subtitle}></div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Activity Date</th>
            <th className={styles.th}>Notes</th>
            <th className={styles.th}>Website</th>
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
            <td className={styles.td}><a className={styles.activityUrl}  href={`http://${activity.activityWebsite}`} target="_blank" rel="noreferrer"> {activity.activityWebsite}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ActivityCard;
