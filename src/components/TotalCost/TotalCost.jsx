import styles from './TotalCost.module.css'

const TotalCost = ({ itinerary }) => {
  const flightsArr = itinerary.flights.map((flight) => flight)

  const totalFlightCost = flightsArr.reduce((accumulator, curr) => accumulator + curr.cost, 0)

  const accommodationsArr = itinerary.accommodations.map((accommodation) => accommodation)

  const totalAccommodationCost = accommodationsArr.reduce((accumulator, curr) => accumulator + curr.cost, 0)

  const activitiesArr = itinerary.activities.map((activity) => activity)

  const totalActivityCost = activitiesArr.reduce((accumulator, curr) => accumulator + curr.cost, 0)

  let totalItinerary = totalFlightCost + totalAccommodationCost + totalActivityCost

  return (
    <>
      <h3 className={totalItinerary > itinerary.budget ? styles.red : styles.normal}>
        Actual Cost: ${totalItinerary.toLocaleString('en-US')}
      </h3>
    </>
  )
}

export default TotalCost
