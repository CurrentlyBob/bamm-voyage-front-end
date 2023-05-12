//css
import styles from './Itineraries.module.css'

const Itineraries = (props) => {
  return (
    <main className={styles.container}>
      {props.itineraries.map(itinerary => (
        <p key={itinerary._id}>
          {itinerary.title}
        </p>
      ))}
    </main>
  )
}

export default Itineraries