// npm module
import { Link } from 'react-router-dom'
import moment from 'moment'
import defaultpic from '../../assets/images/defaultpic.jpg'
// css
import styles from './ItineraryCard.module.css'

const ItineraryCard = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <Link to={`/itineraries/${props.itinerary._id}`} className={styles.link}>
        <div className={styles.body}>
          {props.itinerary.imgUrl ? (
            <>
              <img src={props.itinerary.imgUrl} alt="travel pic" className={styles.pic} />
              <div className={styles.overlayText}>
                <h3 className={styles.title}>
                  {props.itinerary.title.charAt(0).toUpperCase() + props.itinerary.title.slice(1)}
                </h3>
                <h4 className={styles.title}>{moment(props.itinerary.startDate).format('MMM YYYY')}</h4>
              </div>
              <div className={styles.overlayCountdown}>
                <h4 className={styles.title}>{moment(props.itinerary.startDate).fromNow()}</h4>
              </div>
            </>
          ) : (
            <>
              <img src={defaultpic} alt="travel pic" className={styles.pic} />
              <div className={styles.overlayText}>
                <h3 className={styles.title}>
                  {props.itinerary.title.charAt(0).toUpperCase() + props.itinerary.title.slice(1)}
                </h3>
                <h4 className={styles.title}>{moment(props.itinerary.startDate).format('MMM YYYY')}</h4>
              </div>
              <div className={styles.overlayCountdown}>
                <h4 className={styles.title}>{moment(props.itinerary.startDate).fromNow()}</h4>
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ItineraryCard
