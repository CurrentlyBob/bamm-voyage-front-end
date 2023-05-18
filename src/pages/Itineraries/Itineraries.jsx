//css
import styles from './Itineraries.module.css'

import ItineraryCard from '../../components/ItineraryCard/ItineraryCard'

const Itineraries = (props) => {
  if (props.itineraries.length === 0)
    return (
      <h2 className={styles.noItinerary}>
        You haven't made any itineraries yet, click on create itinerary to add one!
      </h2>
    )
  return (
    <main className={styles.itineraryCards}>
      {props.itineraries.map((itinerary) => (
        <ItineraryCard key={itinerary._id} itinerary={itinerary} />
      ))}
    </main>
  )
}

export default Itineraries
