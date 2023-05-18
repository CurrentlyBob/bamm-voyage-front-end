import { Link } from 'react-router-dom'
import moment from 'moment'

import styles from './ActivityCard.module.css'
import ActivityKebabMenu from '../KebabMenus/ActivityKebabMenu'

const ActivityCard = ({ activity, itineraryId, handleDeleteActivity }) => {
  console.log(activity)
  return (
    <>
      <div className={styles.activityTitleContainer}>
        <div className={styles.title}>
          <h2>{activity.category}:</h2>
          <h2>{activity.name}</h2>
        </div>
        <h2 className={styles.activityCost}>${activity.cost}</h2>
        <ActivityKebabMenu activity={activity} itineraryId={itineraryId} handleDeleteActivity={handleDeleteActivity} />
      </div>
      <div className={styles.subtitle}>
        <div className={styles.activityDateContainer}>
          <p>Starting:</p>
          <p className={styles.activityDate}>{moment(activity.date).format('ddd MMMM Do, YYYY hh:mm a')}</p>
        </div>
        <p className={styles.activityWebsite}>
          <a className={styles.activityUrl} href={`${activity.activityWebsite}`} target="_blank" rel="noreferrer">
            {' '}
            {activity.name}'s website
          </a>
        </p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Notes:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>{activity.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ActivityCard
