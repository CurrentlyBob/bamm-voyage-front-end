//css
import styles from './Itineraries.module.css'

import ItineraryCard from '../../components/ItineraryCard/ItineraryCard'

const Itineraries = (props) => {
  if (props.itineraries.length === 0)
    return (
      <div className={styles.noItineraryContainer}>
        <h2 className={styles.noItinerary}>
          You haven't made any itineraries yet, click on create itinerary to add one!
        </h2>
      </div>
    )
  return (
    <main className={styles.itineraryCards}>
      <div className={styles.overlay}>
        {props.itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary._id} itinerary={itinerary} />
        ))}
      </div>
    </main>
  )
}

export default Itineraries
