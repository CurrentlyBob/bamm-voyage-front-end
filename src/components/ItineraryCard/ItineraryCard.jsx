// npm module
import { Link } from 'react-router-dom';

// css
import styles from './ItineraryCard.module.css'

const ItineraryCard = (props) => {
  console.log(props)
  return (
    <Link>
      {props.itineraries.map(itinerary => (
        <div className={styles.container} key={itinerary._id} >
          {/* add image here - need to update backend */}
          <h3>{ itinerary.title }</h3>
          <h4>{ itinerary.startDate }</h4>
      </div>
        ))}
    </Link>
  )
}

export default ItineraryCard