//css
import styles from './Itineraries.module.css'
import ItineraryCard from '../../components/ItineraryCard/ItineraryCard'

const Itineraries = (props) => {
  return (
    <main>
      <ItineraryCard itineraries={props.itineraries} />
    </main>
  )
}

export default Itineraries