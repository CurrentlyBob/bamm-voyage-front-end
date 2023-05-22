import moment from 'moment'

import styles from './ActivityCard.module.css'
import ActivityKebabMenu from '../KebabMenus/ActivityKebabMenu'

const ActivityCard = ({ activity, itineraryId, handleDeleteActivity }) => {
  return (
    <>
      <div className={styles.activityTitleContainer}>
        <div className={styles.title}>
          <h2>{activity.category}:</h2>
          <h2>{activity.name.charAt(0).toUpperCase() + activity.name.slice(1)}</h2>
        </div>
        <h2 className={styles.activityCost}>${activity.cost.toLocaleString('en-US')}</h2>
        <ActivityKebabMenu activity={activity} itineraryId={itineraryId} handleDeleteActivity={handleDeleteActivity} />
      </div>
      <div className={styles.subtitle}>
        <div className={styles.activityDateContainer}>
          <p>Starting:</p>
          <p className={styles.activityDate}>{moment.utc(activity.activityDate).format('ddd MMMM Do, YYYY hh:mm a')}</p>
        </div>
        <p className={styles.activityWebsite}>
          {activity.activityWebsite ? (
            <a className={styles.activityUrl} href={`${activity.activityWebsite}`} target="_blank" rel="noreferrer">
              {activity.name.charAt(0).toUpperCase() + activity.name.slice(1)}'s website
            </a>
          ) : (
            ''
          )}
        </p>
      </div>
      <div className={styles.tableContainer}>
        {activity.notes ? (
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
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ActivityCard
