// npm module
import { Link } from 'react-router-dom';
import moment from "moment"

// css
import styles from './ItineraryCard.module.css'

const ItineraryCard = (props) => {
  console.log(props)
  return (
    <Link to={`/itineraries/${props.itinerary._id}`}> 
      
        <div className={styles.container} >
          {props.itinerary.imgUrl 
          ? 
            <img src={props.itinerary.imgUrl} alt="travel pic" />
          :
            <img src='public/assets/images/travel-pic.png' alt="travel pic" />
          }
          <h3>{ props.itinerary.title }</h3>
          <h4>{ moment(props.itinerary.startDate).format("MMMM Do, YYYY") }</h4>
      </div>
    </Link>
  )
}

export default ItineraryCard