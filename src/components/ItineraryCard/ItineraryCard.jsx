// npm module
import { Link } from 'react-router-dom';

// css
import styles from './ItineraryCard.module.css'

const ItineraryCard = (props) => {
  console.log(props)
  return (
    <Link to={`/itineraries/${props.itinerary._id}`}> 
      
        <div className={styles.container} >
          
          <h3>{ props.itinerary.title }</h3>
          <h4>{ props.itinerary.startDate }</h4>
      </div>
    </Link>
  )
}

export default ItineraryCard