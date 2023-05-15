import styles from './TotalCost.module.css'

const TotalCost = ({itinerary}) => {
  
  const flightsArr = itinerary.flights.map(flight => (
    flight
  ))

  const totalFlightCost = flightsArr.reduce(
    (accumulator, curr) => 
      accumulator + curr.cost, 0
  )

  const accommodationsArr = itinerary.accommodations.map(accommodation => (
    accommodation
  ))

  const totalAccommodationCost = accommodationsArr.reduce(
    (accumulator, curr) =>
      accumulator + curr.cost, 0
  )

  let totalItinerary = totalFlightCost + totalAccommodationCost

  return (
    <>
        <h3 className={totalItinerary > itinerary.budget ? styles.red : styles.normal}>
          Actual Cost: ${totalItinerary}
        </h3>
    </>
  )
}

export default TotalCost