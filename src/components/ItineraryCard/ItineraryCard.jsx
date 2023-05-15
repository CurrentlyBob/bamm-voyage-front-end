// npm module
import { Link } from 'react-router-dom';
import moment from "moment"

// css
import styles from './ItineraryCard.module.css'

const ItineraryCard = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <Link to={`/itineraries/${props.itinerary._id}`} className={styles.link}> 
          <div className={styles.body} >
            {props.itinerary.imgUrl 
            ? 
              <>
                {/* <div style={{backgroundImage: `url('${props.itinerary.imgUrl}')`}}></div> */}
                <img src={props.itinerary.imgUrl} alt="travel pic" className={styles.pic}/>
                <div className={styles.overlayText}>
                  <h3 className={styles.title}>{ props.itinerary.title.charAt(0).toUpperCase()+ props.itinerary.title.slice(1) }</h3>
                  <h4 className={styles.title}>{ moment(props.itinerary.startDate).format("MMMM Do, YYYY") }</h4>
                  <h4>{moment(props.itinerary.startDate).fromNow()}</h4>
                </div>
              </>
              :
              <>
                {/* <p style={{backgroundImage: `url('public/assets/images/travel-pic.png')`}}></p> */}
                <img src='public/assets/images/travel-pic.png' alt="travel pic" className={styles.pic}/>
                <div className={styles.overlayText}>
                  <h3 className={styles.title}>{ props.itinerary.title.charAt(0).toUpperCase()+ props.itinerary.title.slice(1) }</h3>
                  <h4 className={styles.title}>{ moment(props.itinerary.startDate).format("MMMM Do, YYYY") }</h4>
                  <h4>{moment(props.itinerary.startDate).fromNow()}</h4>
                </div>
              </>
            }
        </div>
      </Link>
    </div>
  )
}

export default ItineraryCard